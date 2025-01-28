import { createContext, useContext, useReducer } from 'react';
import {
    AccountFormData,
    CheckoutData,
    CheckoutFormData,
} from '../../types/form';
import { CheckoutAction, CheckoutContextType, CheckoutState } from '../../types/checkoutContext';

const checkoutReducer = (
    state: CheckoutState,
    action: CheckoutAction
): CheckoutState => {
    switch (action.type) {
        case 'checkout/updateData':
            return {
                ...state,
                checkoutData: {
                    ...state.checkoutData,
                    [action.payload.step]: action.payload.data,
                },
            };
        case 'checkout/setAuthenticated':
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        case 'checkout/setDummyUserData':
            return {
                ...state,
                dummyUserData: action.payload,
            };
        case 'checkout/setDummySelectedSavedShipping':
            return {
                ...state,
                dummySelectedSavedShipping: action.payload,
            };
        case 'checkout/setDummySelectedSavedPayment':
            return {
                ...state,
                dummySelectedSavedPayment: action.payload,
            };
        case 'checkout/setCurrentStep':
            return {
                ...state,
                currentStep: action.payload,
            };
        default:
            return state;
    }
};

const initialState: CheckoutState = {
    checkoutData: {},
    isAuthenticated: false,
    dummyUserData: null,
    dummySelectedSavedShipping: null,
    dummySelectedSavedPayment: null,
    currentStep: 0,
};

const CheckoutContext = createContext<CheckoutContextType | null>(null);

const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [{
        checkoutData,
        isAuthenticated,
        dummyUserData,
        dummySelectedSavedShipping,
        dummySelectedSavedPayment,
        currentStep
    }, dispatch] = useReducer(checkoutReducer, initialState);

    const updateCheckoutData = (
        step: keyof CheckoutData,
        data: CheckoutFormData
    ) => {
        dispatch({ type: 'checkout/updateData', payload: { step, data } });
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

    const setCurrentStep = (step: number): void => {
        dispatch({ type: 'checkout/setCurrentStep', payload: step });
    };

    return (
        <CheckoutContext.Provider
            value={{
                checkoutData,
                updateCheckoutData,
                isAuthenticated,
                setAuthenticated,
                dummyUserData,
                setDummyUserData,
                dummySelectedSavedShipping,
                setDummySelectedSavedShipping,
                dummySelectedSavedPayment,
                setDummySelectedSavedPayment,
                currentStep,
                setCurrentStep,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}

const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context)
        throw new Error('useCheckout must be used within CheckoutProvider');
    return context;
};

export {
    CheckoutContext,
    CheckoutProvider,
    useCheckout
}
