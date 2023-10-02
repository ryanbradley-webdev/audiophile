import { formatCurrency } from "./formatCurrency"

export const calculateCartTotal = (cart: CartItem[]) => {
    const total = cart.reduce((prevValue, currentValue) => (
        prevValue + (currentValue.quantity * currentValue.price)
    ), 0)

    return formatCurrency(total)
}