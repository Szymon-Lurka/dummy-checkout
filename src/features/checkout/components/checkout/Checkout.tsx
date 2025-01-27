import CheckoutForm from '../checkoutform/CheckoutForm.tsx';
import CheckoutCart from '../cart/CheckoutCart.tsx';
import { CheckoutProvider } from '../../contexts/checkout/CheckoutContext.tsx';
import { CartSection, CheckoutContainer, FormSection } from './Checkout.styles.tsx';

function Checkout() {
  return (
    <CheckoutContainer>
      <FormSection>
        <CheckoutProvider>
          <CheckoutForm />
        </CheckoutProvider>
      </FormSection>
      <CartSection>
        <CheckoutCart />
      </CartSection>
    </CheckoutContainer>
  );
}

export default Checkout;
