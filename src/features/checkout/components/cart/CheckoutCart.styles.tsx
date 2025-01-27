import styled from 'styled-components';

const CartWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const StyledProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  background-color: var(--color-background-light);
`;

const StyledProductData = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const StyledProductDataWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const StyledProductName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const StyledProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const StyledCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 22px 0 30px;
`;

export {
  CartWrapper,
  StyledTitle,
  StyledProductImage,
  StyledProductData,
  StyledProductDataWrapper,
  StyledProductName,
  StyledProductPrice,
  StyledCartInfo,
  DiscountSection
}