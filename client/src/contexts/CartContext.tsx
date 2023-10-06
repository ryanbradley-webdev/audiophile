import { ReactNode, createContext, useState } from 'react'
import { calculateCartTotal } from '../util/calculateCartTotal'

export const CartContext = createContext({} as CartContext)

export default function CartProvider({
    children
}: {
    children: ReactNode
}) {
    const [cart, setCart] = useState<CartItem[]>([])

    const incrementQuantity = (id: string) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                return ({
                    ...item,
                    quantity: item.quantity + 1
                })
            }

            return item
        }))
    }

    const decrementQuantity = (id: string) => {
        if (cart.find(item => item.id === id)?.quantity === 1) {
            removeItemFromCart(id)
        } else {
            setCart(prev => prev.map(item => {
                if (item.id === id) {
                    return ({
                        ...item,
                        quantity: item.quantity - 1
                    })
                }

                return item
            }))
        }
    }

    const removeItemFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const addItemToCart = (newProduct: CartItem) => {
      setCart(prev => ([
        ...prev,
        newProduct
      ]))
    }

    const emptyCart = () => {
        setCart([])
    }

    const value = {
        cart,
        incrementQuantity,
        decrementQuantity,
        addItemToCart,
        emptyCart,
        total: calculateCartTotal(cart)
    }

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    )
}