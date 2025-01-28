import { AccountFormData } from "./form";

import { CheckoutFormData } from "./form";

import { CheckoutData } from "./form";

interface CheckoutContextType {
    checkoutData: Partial<CheckoutData>;
    isAuthenticated: boolean;
    updateCheckoutData: (
        step: keyof CheckoutData,
        data: CheckoutFormData
    ) => void;
    setAuthenticated: (value: boolean) => void;
    setDummyUserData: (data: AccountFormData) => void;
    dummyUserData: AccountFormData | null;
    setDummySelectedSavedShipping: (data: string) => void;
    setDummySelectedSavedPayment: (data: string) => void;
    dummySelectedSavedShipping: string | null;
    dummySelectedSavedPayment: string | null;
    setCurrentStep: (step: number) => void;
    currentStep: number;
}

type CheckoutAction =
    | {
        type: 'checkout/updateData';
        payload: { step: keyof CheckoutData; data: CheckoutFormData };
    }
    | { type: 'checkout/setAuthenticated'; payload: boolean }
    | { type: 'checkout/setDummyUserData'; payload: AccountFormData }
    | { type: 'checkout/setDummySelectedSavedShipping'; payload: string }
    | { type: 'checkout/setDummySelectedSavedPayment'; payload: string }
    | { type: 'checkout/setCurrentStep'; payload: number };

interface CheckoutState {
    checkoutData: Partial<CheckoutData>;
    isAuthenticated: boolean;
    dummyUserData: AccountFormData | null;
    dummySelectedSavedShipping: string | null;
    dummySelectedSavedPayment: string | null;
    currentStep: number;
}

export type {
    CheckoutContextType,
    CheckoutAction,
    CheckoutState
}
