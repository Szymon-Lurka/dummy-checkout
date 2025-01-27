import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ShippingFormData } from '../../../types/form';
import FormRow from '../../../../../components/form/row/FormRow';
import Input from '../../../../../components/form/input/FormInput';
import FormRowWrapper from '../../../../../components/form/row/wrapper/FormRowWrapper';
import FormSelect from '../../../../../components/form/select/FormSelect';
import { useCheckout } from '../../../contexts/checkout/CheckoutContext';
import FormSavedSelect from '../../../../../components/form/savedselect/FormSavedSelect';

const dummySavedShippings = [
    {
        data: {
            addressLine1: "123 Main St",
            streetName: "Main St",
            postcode: "12345",
            shippingMethod: "free"
        },
        label: '123, Main St'
    }
];

const shippingSchema = z.object({
    addressLine1: z.string().min(1, "Address is required"),
    streetName: z.string().min(1, "Street name is required"),
    postcode: z.string().min(1, "Postcode is required"),
    shippingMethod: z.string().min(1, "Please select shipping method")
});

interface Props {
    onSubmit: (data: ShippingFormData) => void;
    defaultValues?: Partial<ShippingFormData>;
    formRef: React.RefObject<HTMLFormElement>;
}

function CheckoutFormShipping({ onSubmit, defaultValues, formRef }: Props) {
    const { register, handleSubmit, formState: { errors }, setValue, reset, trigger } = useForm<ShippingFormData>({
        resolver: zodResolver(shippingSchema),
        defaultValues
    });
    const { setDummySelectedSavedShipping, dummySelectedSavedShipping } = useCheckout();

    const handleSavedShippingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === '') {
            setDummySelectedSavedShipping('');
            reset({
                addressLine1: '',
                streetName: '',
                postcode: '',
                shippingMethod: ''
            });
        } else {
            setDummySelectedSavedShipping(value);
            const selectedShipping = dummySavedShippings.find(shipping => shipping.label === value);
            if (selectedShipping) {
                setValue('addressLine1', selectedShipping.data.addressLine1, { shouldValidate: true });
                setValue('streetName', selectedShipping.data.streetName, { shouldValidate: true });
                setValue('postcode', selectedShipping.data.postcode, { shouldValidate: true });
                setValue('shippingMethod', selectedShipping.data.shippingMethod, { shouldValidate: true });
                trigger(['addressLine1', 'streetName', 'postcode', 'shippingMethod']);
            }
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormSavedSelect
                options={dummySavedShippings.map(shipping => ({ label: shipping.label, value: shipping.label }))}
                onChange={handleSavedShippingChange}
                label="Use saved address"
                value={dummySelectedSavedShipping || ''}
            />
            <FormRow label="Address Line 1" error={errors.addressLine1?.message}>
                <Input
                    id="addressLine1"
                    {...register('addressLine1')}
                />
            </FormRow>
            <FormRow label="Street Name" error={errors.streetName?.message}>
                <Input
                    id="streetName"
                    {...register('streetName')}
                />
            </FormRow>
            <FormRowWrapper>
                <FormRow label="Postcode" error={errors.postcode?.message}>
                    <Input
                        id="postcode"
                        {...register('postcode')}
                    />
                </FormRow>
                <FormRow label="Shipping Method" error={errors.shippingMethod?.message}>
                    <FormSelect {...register('shippingMethod')}>
                        <option value="">Select shipping method</option>
                        <option value="free">Free Delivery</option>
                        <option value="express">Express Delivery</option>
                    </FormSelect>
                </FormRow>
            </FormRowWrapper>
        </form>
    );
}

export default CheckoutFormShipping;
