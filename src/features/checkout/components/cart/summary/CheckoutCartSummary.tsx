import {
    FreeShipping,
    SummaryLabel,
    SummaryRow,
    SummaryValue,
    TotalLabel,
    TotalValue,
} from './CheckoutCartSummary.styles.tsx';

const CheckoutCartSummary = () => {
    return <>
        <SummaryRow>
            <SummaryLabel>Sub total</SummaryLabel>
            <SummaryValue>£316.55</SummaryValue>
        </SummaryRow>
        <SummaryRow>
            <SummaryLabel>Tax</SummaryLabel>
            <SummaryValue>£3.45</SummaryValue>
        </SummaryRow>
        <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <FreeShipping>Free</FreeShipping>
        </SummaryRow>
        <SummaryRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>£320.45</TotalValue>
        </SummaryRow>
    </>
}

export default CheckoutCartSummary;