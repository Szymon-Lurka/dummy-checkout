import styled from 'styled-components';

const DiscountTitle = styled.p`
  color: var(--color-text-gray-dark);
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const DiscountInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DiscountInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-background-gray);
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--color-background-gray);
`;

const ApplyButton = styled.button`
  padding: 0.75rem 2rem;
  border: 1px solid var(--color-brand-primary);
  border-radius: 8px;
  background-color: white;
  color: var(--color-brand-primary);
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-background-gray);
  }
`;

export {
  DiscountTitle,
  DiscountInput,
  DiscountInputWrapper,
  ApplyButton
}