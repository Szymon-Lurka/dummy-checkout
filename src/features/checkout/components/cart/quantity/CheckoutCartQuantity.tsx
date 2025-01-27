import {
  QuantityButton,
  QuantityControls,
  QuantityText,
  QuantityWrapper,
} from './QuantityWrapper.styles.tsx';

const CheckoutCartQuantity = () => {
  return (
    <QuantityWrapper>
      <QuantityControls>
        <QuantityButton>-</QuantityButton>
        <QuantityText>1</QuantityText>
        <QuantityButton>+</QuantityButton>
      </QuantityControls>
    </QuantityWrapper>
  );
};

export default CheckoutCartQuantity;
