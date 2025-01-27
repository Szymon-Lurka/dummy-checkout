import dummyProduct from '../../../../assets/images/dummy-product-img.png';
import CheckoutCartQuantity from './quantity/CheckoutCartQuantity';
import CheckoutCartDiscount from './discount/CheckoutCartDiscount';
import CheckoutCartSummary from './summary/CheckoutCartSummary';
import {
  CartWrapper, DiscountSection, StyledCartInfo,
  StyledProductData,
  StyledProductDataWrapper,
  StyledProductImage, StyledProductName, StyledProductPrice,
  StyledTitle,
} from './CheckoutCart.styles.tsx';




function CheckoutCart() {
  return (
    <CartWrapper>
      <StyledTitle>Order Summary</StyledTitle>
      <StyledProductImage src={dummyProduct} alt="Dummy Product" />
      <StyledProductDataWrapper>
        <StyledProductData>
          <StyledProductName>Sony wireless headphones</StyledProductName>
          <StyledProductPrice>£320.45</StyledProductPrice>
        </StyledProductData>
        <CheckoutCartQuantity />
      </StyledProductDataWrapper>
      <DiscountSection>
        <CheckoutCartDiscount />
      </DiscountSection>
      <StyledCartInfo>
        <CheckoutCartSummary />
      </StyledCartInfo>
    </CartWrapper>
  );
}

export default CheckoutCart;
