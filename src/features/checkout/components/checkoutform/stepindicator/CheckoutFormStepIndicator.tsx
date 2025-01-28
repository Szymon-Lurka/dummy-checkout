import React from 'react';
import IndicatorCircle from '../../../../../assets/icons/indicator-circle.svg';
import {
    CheckIcon,
    ConnectorPart,
    ConnectorWrapper,
    StepContainer,
    StepItem,
    StepTitle,
} from './StepIndicator.styles.tsx';
import { useCheckout } from '../../../contexts/checkout/CheckoutContext.tsx';
import { Step } from '../../checkoutform/CheckoutForm.tsx';

interface Props {
    steps: readonly Step[];
}

function StepIndicator({ steps }: Props) {
    const { setCurrentStep, currentStep } = useCheckout();

    const handleClick = (index: number) => {
        if (index < currentStep) {
            setCurrentStep(index);
        }
    };

    return (
        <StepContainer>
            {steps.map((step, index) => {
                const isBefore = currentStep > index;
                const isActiveOrCompleted = currentStep >= index;
                const isCompleted = currentStep > index;

                return (
                    <React.Fragment key={step.key}>
                        <StepItem onClick={() => handleClick(index)}>
                            <StepTitle
                                $isBefore={isBefore}
                                $isActiveOrCompleted={isActiveOrCompleted}
                            >
                                {step.title}
                            </StepTitle>
                        </StepItem>
                        {index < steps.length - 1 && (
                            <ConnectorWrapper>
                                <ConnectorPart $isCompleted={isCompleted} />
                                {isCompleted && <CheckIcon src={IndicatorCircle} alt="" />}
                                <ConnectorPart $isCompleted={isCompleted} />
                            </ConnectorWrapper>
                        )}
                    </React.Fragment>
                );
            })}
        </StepContainer>
    );
}

export default StepIndicator;
