import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PaymentFormData } from '../../../types/form';
import FormRow from '../../../../../components/form/row/FormRow';
import Input from '../../../../../components/form/input/FormInput';
import { ExpirationCVCWrapper, ExpirationWrapper } from './CheckoutForm.styles.tsx';
import { useCheckout } from '../../../contexts/checkout/CheckoutContext';
import FormSavedSelect from '../../../../../components/form/savedselect/FormSavedSelect';

const dummySavedPayments = [
    {
        data: {
            cardHolder: 'John Doe',
            cardNumber: '1234567890123445',
            expirationMonth: '12',
            expirationYear: '25',
            cvc: '123'
        },
        label: 'Mastercard ending 445'
    }
];

const paymentSchema = z.object({
    cardHolder: z.string().min(1, "Card holder name is required"),
    cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
    expirationMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "Invalid month"),
    expirationYear: z.string().regex(/^\d{2}$/, "Invalid year"),
    cvc: z.string().min(3, "Invalid CVC")
});

interface Props {
    onSubmit: (data: PaymentFormData) => void;
    defaultValues?: Partial<PaymentFormData>;
    formRef: React.RefObject<HTMLFormElement>;
}

function CheckoutFormPayment({ onSubmit, defaultValues, formRef }: Props) {
    // In real world I'd probably use some embed payments like adyen/stripe to handle that
    // but for sake of simplicity I'll just use zod to validate the data and create dummy payment form
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PaymentFormData>({
        resolver: zodResolver(paymentSchema),
        defaultValues
    });

    const { setDummySelectedSavedPayment, dummySelectedSavedPayment } = useCheckout();

    const handleSavedPaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === '') {
            setDummySelectedSavedPayment('');
            reset();
        } else {
            setDummySelectedSavedPayment(value);
            const selectedPayment = dummySavedPayments.find(payment => payment.label === value);
            if (selectedPayment) {
                setValue('cardHolder', selectedPayment.data.cardHolder, { shouldValidate: true });
                setValue('cardNumber', selectedPayment.data.cardNumber, { shouldValidate: true });
                setValue('expirationMonth', selectedPayment.data.expirationMonth, { shouldValidate: true });
                setValue('expirationYear', selectedPayment.data.expirationYear, { shouldValidate: true });
                setValue('cvc', selectedPayment.data.cvc, { shouldValidate: true });
            }
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormSavedSelect
                options={dummySavedPayments.map(payment => ({ label: payment.label, value: payment.label }))}
                onChange={handleSavedPaymentChange}
                label="Use saved card"
                value={dummySelectedSavedPayment || ''}
            />
            <FormRow label="Card Holder Name" error={errors.cardHolder?.message}>
                <Input
                    id="cardHolder"
                    {...register('cardHolder')}
                />
            </FormRow>
            <FormRow label="Card Number" error={errors.cardNumber?.message}>
                <Input
                    id="cardNumber"
                    {...register('cardNumber')}
                    maxLength={16}
                />
            </FormRow>
            <ExpirationCVCWrapper>
                <FormRow label="Expiration" error={errors.expirationMonth?.message || errors.expirationYear?.message}>
                    <ExpirationWrapper>
                        <Input
                            id="expirationMonth"
                            {...register('expirationMonth')}
                            maxLength={2}
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Input
                            id="expirationYear"
                            {...register('expirationYear')}
                            maxLength={2}
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                    </ExpirationWrapper>
                </FormRow>
                <FormRow
                    label="CVC"
                    error={errors.cvc?.message}
                    style={{ flexGrow: 1 }}
                    showHelpIcon
                    helpText="The CVC is the 3 or 4 digit security code on the back of your card"
                >
                    <Input
                        id="cvc"
                        {...register('cvc')}
                        maxLength={4}
                    />
                </FormRow>
            </ExpirationCVCWrapper>
        </form>
    );
}

export default CheckoutFormPayment;