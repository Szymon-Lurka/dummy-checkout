import React from 'react';
import IndicatorCircle from '../../../../../assets/icons/indicator-circle.svg';
import { StepContainer, StepItem, StepTitle, ConnectorWrapper, ConnectorPart, CheckIcon } from './StepIndicator.styles.tsx';
export interface Step {
    key: string;
    title: string;
}

interface Props {
    steps: Step[];
    currentStep: number;
    handleStepClick?: (index: number) => void;
}

function StepIndicator({ steps, currentStep, handleStepClick }: Props) {
    const handleClick = (index: number) => {
        handleStepClick?.(index);
    }

    return (
        <StepContainer>
            {steps.map((step, index) => {
                const isBefore = currentStep > index;
                const isActiveOrCompleted = currentStep >= index;
                const isCompleted = currentStep > index;

                return (
                    <React.Fragment key={step.key}>
                        <StepItem onClick={() => handleClick(index)}>
                            <StepTitle $isBefore={isBefore} $isActiveOrCompleted={isActiveOrCompleted}>
                                {step.title}
                            </StepTitle>
                        </StepItem>
                        {index < steps.length - 1 && (
                            <ConnectorWrapper>
                                <ConnectorPart $isCompleted={isCompleted} />
                                {isCompleted && (
                                    <CheckIcon
                                        src={IndicatorCircle}
                                        alt=""
                                    />
                                )}
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