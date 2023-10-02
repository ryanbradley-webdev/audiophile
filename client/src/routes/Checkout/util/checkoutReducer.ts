export const initialCheckout: CheckoutData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment_method: 'e-Money',
    e_money_number: '',
    pin: ''
}

export const checkoutReducer = (state: CheckoutData, action: CheckoutAction): CheckoutData => {
    switch (action.type) {
        case 'updateName':
            return { ...state, name: action.payload }

        case 'updateEmail':
            return { ...state, email: action.payload }

        case 'updatePhone':
            return { ...state, phone: action.payload }

        case 'updateAddress':
            return { ...state, address: action.payload }

        case 'updateZip':
            return { ...state, zip: action.payload }

        case 'updateCity':
            return { ...state, city: action.payload }

        case 'updateCountry':
            return { ...state, country: action.payload }
            
        case 'updatePaymentMethod':
            if (action.payload === 'e-Money' || action.payload === 'Cash on Delivery') {
                return { ...state, payment_method: action.payload }
            }

            return state

        case 'updateEMoneyNumber':
            return { ...state, e_money_number: action.payload }

        case 'updatePin':
            return { ...state, pin: action.payload }

        default:
            return state
    }
}