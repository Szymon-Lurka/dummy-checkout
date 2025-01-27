import styled from 'styled-components';

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
`;
const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-gray);
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  color: var(--color-text-gray-dark);
`;
const QuantityText = styled.p`
  min-width: 20px;
  text-align: center;
  font-size: 16px;
  margin: 0;
`;

export {
  QuantityWrapper,
  QuantityControls,
  QuantityButton,
  QuantityText
}