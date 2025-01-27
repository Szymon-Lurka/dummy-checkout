import styled from 'styled-components';

const CheckoutContainer = styled.div`
  display: flex;
  min-height: 500px;
  gap: 2rem;
`;

const Section = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: var(--color-background-light);
`;

const FormSection = styled(Section)`
flex-basis: 65%;
`;

const CartSection = styled(Section)`
  flex-basis: 35%;
`;

export {
  CheckoutContainer,
  FormSection,
  CartSection
}