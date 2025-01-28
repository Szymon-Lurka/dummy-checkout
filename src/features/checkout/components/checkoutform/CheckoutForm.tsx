import CheckoutFormAccount from './account/CheckoutFormAccount';
import CheckoutFormShipping from './shipping/CheckoutFormShipping';
import CheckoutFormPayment from './payment/CheckoutFormPayment';
import { useRef } from 'react';
import { useCheckout } from '../../contexts/checkout/CheckoutContext';
import { CheckoutData, CheckoutFormData } from '../../types/form';
import StepIndicator from './stepindicator/CheckoutFormStepIndicator';
import {
    ButtonContainer,
    FormContent,
    FormWrapper,
    StyledHeading,
} from './CheckoutForm.styles.tsx';
import { Button } from '../../../../components/button/Button';
import { toast } from 'react-hot-toast';

const steps = [
    {
        title: 'Account',
        element: CheckoutFormAccount,
        submitButtonLabel: 'Shipping details',
        heading: 'Account details',
        key: 'account',
    },
    {
        title: 'Shipping',
        element: CheckoutFormShipping,
        submitButtonLabel: 'Payment',
        heading: 'Shipping details',
        key: 'shipping',
    },
    {
        title: 'Payment',
        element: CheckoutFormPayment,
        submitButtonLabel: 'Complete order',
        heading: 'Payment details',
        key: 'payment',
    },
] as const;

type Step = typeof steps[number];

function CheckoutForm() {
    const {
        checkoutData,
        isAuthenticated,
        updateCheckoutData,
        currentStep,
        setCurrentStep,
    } = useCheckout();
    const formRef = useRef<HTMLFormElement>(null);

    const handleCancel = () => {
        if (window.confirm('Are you sure you want to cancel your order?')) {
            // dummy whatever
        }
    };

    const goToNextStep = (data: CheckoutFormData) => {
        const currentStepKey = steps[currentStep].key as keyof CheckoutData;
        updateCheckoutData(currentStepKey, data);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            const finalCheckoutData = {
                ...checkoutData,
                [currentStepKey]: data,
            } as CheckoutData;
            handleCheckoutSubmit(finalCheckoutData);
        }
    };

    const handleCheckoutSubmit = (data: CheckoutData) => {
        console.log(data);
        toast.success('Checkout completed');
    };

    const CurrentStepComponent = steps[currentStep].element;

    return (
        <FormWrapper>
            <FormContent>
                <StepIndicator steps={steps} />
                <StyledHeading>{steps[currentStep].heading}</StyledHeading>
                <CurrentStepComponent
                    defaultValues={
                        checkoutData[steps[currentStep].key as keyof CheckoutData]
                    }
                    onSubmit={goToNextStep}
                    formRef={formRef}
                />
            </FormContent>
            {(currentStep > 0 || isAuthenticated) && (
                <ButtonContainer>
                    <Button $type="secondary" onClick={handleCancel}>
                        Cancel order
                    </Button>
                    <Button
                        $type="primary"
                        onClick={() => formRef.current?.requestSubmit()}
                    >
                        {steps[currentStep].submitButtonLabel}
                    </Button>
                </ButtonContainer>
            )}
        </FormWrapper>
    );
}

export type {
    Step
}

export default CheckoutForm;
