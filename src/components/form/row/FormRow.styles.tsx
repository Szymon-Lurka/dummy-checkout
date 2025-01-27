import styled from 'styled-components';

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const StyledError = styled.span`
    color: var(--color-text-error);
`;

const StyledLabel = styled.label`
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--color-text-muted);
`;

const LabelWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const QuestionIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: help;
`;

export {
  StyledError,
  StyledFormRow,
  StyledLabel,
  LabelWrapper,
  QuestionIcon
}
