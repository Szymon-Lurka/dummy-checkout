import styled from 'styled-components';

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryLabel = styled.p`
  color: #4B5563;
  font-size: 16px;
  margin: 0;
`;

const SummaryValue = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: right;
`;

const FreeShipping = styled(SummaryValue)`
  color: var(--color-text-success);
`;

const TotalLabel = styled(SummaryLabel)`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-dark);
`;

const TotalValue = styled(SummaryValue)`
  font-size: 20px;
  font-weight: 600;
`;

export {
  SummaryRow,
  SummaryValue,
  SummaryLabel,
  FreeShipping,
  TotalLabel,
  TotalValue
}
