export type AccountFormData = {
    email: string;
    password: string;
}

export type ShippingFormData = {
    addressLine1: string;
    streetName: string;
    postcode: string;
    shippingMethod: string;
}

export type PaymentFormData = {
    cardHolder: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvc: string;
}

export type CheckoutFormData = AccountFormData | ShippingFormData | PaymentFormData;

export type CheckoutData = {
    account: AccountFormData;
    shipping: ShippingFormData;
    payment: PaymentFormData;
}
