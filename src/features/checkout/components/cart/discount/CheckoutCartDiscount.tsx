import { ApplyButton, DiscountInput, DiscountInputWrapper, DiscountTitle } from './CheckoutCartDiscount.styles.tsx';

const CheckoutCartDiscount = () => {
    return <>
        <DiscountTitle>Gift Card / Discount code</DiscountTitle>
        <DiscountInputWrapper>
            <DiscountInput type="text" />
            <ApplyButton>Apply</ApplyButton>
        </DiscountInputWrapper>
    </>
}

export default CheckoutCartDiscount;
