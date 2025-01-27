import styled from 'styled-components';

const StepContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const StepItem = styled.div`
    display: flex;
    align-items: center;
`;

const StepTitle = styled.span<{ $isBefore: boolean, $isActiveOrCompleted: boolean }>`
    color: ${({ $isActiveOrCompleted }) => $isActiveOrCompleted ? 'var(--color-brand-primary)' : 'var(--color-text-gray)'};
    font-size: 1rem;
    cursor: ${({ $isBefore }) => $isBefore ? 'pointer' : 'default'};
`;

const ConnectorWrapper = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
`;

const ConnectorPart = styled.div<{ $isCompleted: boolean }>`
    height: 1px;
    background: var(--color-brand-primary);
    flex: 1;
    opacity: ${({ $isCompleted }) => $isCompleted ? 1 : 0.5};
`;

const CheckIcon = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    margin: 0 0.5rem;
`;

export {
    StepContainer,
    StepItem,
    StepTitle,
    ConnectorWrapper,
    ConnectorPart,
    CheckIcon
}