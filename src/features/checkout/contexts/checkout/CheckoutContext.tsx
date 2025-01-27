import { createContext, useContext, useReducer } from 'react';
import { AccountFormData, CheckoutData } from '../../types/form';

interface CheckoutState {
    checkoutData: Partial<CheckoutData>;
    isAuthenticated: boolean;
    dummyUserData: AccountFormData | null;
    dummySelectedSavedShipping: string | null;
    dummySelectedSavedPayment: string | null;
}

type CheckoutAction =
    | { type: 'checkout/updateData'; payload: {step: keyof CheckoutData; data: any} }
    | { type: 'checkout/setAuthenticated'; payload: boolean }
    | { type: 'checkout/setDummyUserData'; payload: AccountFormData }
    | { type: 'checkout/setDummySelectedSavedShipping'; payload: string }
    | { type: 'checkout/setDummySelectedSavedPayment'; payload: string };

const checkoutReducer = (state: CheckoutState, action: CheckoutAction): CheckoutState => {
    switch (action.type) {
        case 'checkout/updateData':
            return {
                ...state,
                checkoutData: {
                    ...state.checkoutData,
                    [action.payload.step]: action.payload.data
                }
            };
        case 'checkout/setAuthenticated':
            return {
                ...state,
                isAuthenticated: action.payload
            };
        case 'checkout/setDummyUserData':
            return {
                ...state,
                dummyUserData: action.payload
            };
        case 'checkout/setDummySelectedSavedShipping':
            return {
                ...state,
                dummySelectedSavedShipping: action.payload
            };
        case 'checkout/setDummySelectedSavedPayment':
            return {
                ...state,
                dummySelectedSavedPayment: action.payload
            };
        default:
            return state;
    }
};

interface CheckoutContextType {
    checkoutData: Partial<CheckoutData>;
    isAuthenticated: boolean;
    updateCheckoutData: (step: keyof CheckoutData, data: any) => void;
    setAuthenticated: (value: boolean) => void;
    setDummyUserData: (data: AccountFormData) => void;
    dummyUserData: AccountFormData | null;
    setDummySelectedSavedShipping: (data: string) => void;
    setDummySelectedSavedPayment: (data: string) => void;
    dummySelectedSavedShipping: string | null;
    dummySelectedSavedPayment: string | null;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(checkoutReducer, {
        checkoutData: {},
        isAuthenticated: false,
        dummyUserData: null,
        dummySelectedSavedShipping: null,
        dummySelectedSavedPayment: null
    });

    const updateCheckoutData = (step: keyof CheckoutData, data: any) => {
        dispatch({ type: 'checkout/updateData', payload: {step, data} });
    };

    const setAuthenticated = (value: boolean) => {
        dispatch({ type: 'checkout/setAuthenticated', payload: value });
    };

    const setDummyUserData = (data: AccountFormData) => {
        dispatch({ type: 'checkout/setDummyUserData', payload: data });
    };

    const setDummySelectedSavedShipping = (data: string) => {
        dispatch({ type: 'checkout/setDummySelectedSavedShipping', payload: data });
    };

    const setDummySelectedSavedPayment = (data: string) => {
        dispatch({ type: 'checkout/setDummySelectedSavedPayment', payload: data });
    };

    return (
        <CheckoutContext.Provider value={{
            checkoutData: state.checkoutData,
            isAuthenticated: state.isAuthenticated,
            updateCheckoutData,
            setAuthenticated,
            setDummyUserData,
            dummyUserData: state.dummyUserData,
            setDummySelectedSavedShipping,
            setDummySelectedSavedPayment,
            dummySelectedSavedShipping: state.dummySelectedSavedShipping,
            dummySelectedSavedPayment: state.dummySelectedSavedPayment
        }}>
            {children}
        </CheckoutContext.Provider>
    );
}

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) throw new Error('useCheckout must be used within CheckoutProvider');
    return context;
};
