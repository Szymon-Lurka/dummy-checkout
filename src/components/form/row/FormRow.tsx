import React from "react";
import { LabelWrapper, QuestionIcon, StyledError, StyledFormRow, StyledLabel } from './FormRow.styles.tsx';

interface FormRowProps {
    label: string;
    error?: string;
    children: React.ReactElement;
    style?: React.CSSProperties;
    showHelpIcon?: boolean;
    helpText?: string;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children, style, showHelpIcon, helpText = "Help information" }) => {
    const childId = React.isValidElement(children) ? (children as React.ReactElement).props.id : undefined;

    return (
        <StyledFormRow style={style}>
            <StyledLabel htmlFor={childId}>
                <LabelWrapper>
                    {label}
                    {showHelpIcon && (
                        <QuestionIcon
                            src="/src/assets/icons/question.svg"
                            alt=""
                            title={helpText}
                        />
                    )}
                </LabelWrapper>
            </StyledLabel>
            {children}
            {error && <StyledError>{error}</StyledError>}
        </StyledFormRow>
    )
}

export default FormRow;
