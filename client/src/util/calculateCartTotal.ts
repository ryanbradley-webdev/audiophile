export const calculateCartTotal = (cart: CartItem[]) => {
    if (cart.length === 0) return 0

    const total = cart.reduce((prevValue, currentValue) => (
        prevValue + (currentValue.quantity * currentValue.price)
    ), 0)

    return total
}