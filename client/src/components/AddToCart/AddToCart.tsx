import { useContext, useState } from 'react'
import Button from '../Button/Button'
import styles from './AddToCart.module.css'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import { CartContext } from '../../contexts/CartContext'

export default function AddToCart({
    product
}: {
    product: Product
}) {
    const {
        addItemToCart
    } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const handleIncrementQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecrementQuantity = () => {
        setQuantity(prev => {
            if (prev > 1) {
                return prev - 1
            }

            return prev
        })
    }

    const handleAddToCart = () => {
        const newCartItem = {
            ...product,
            quantity
        }

        addItemToCart(newCartItem)
    }

    return (
        <div
            className={styles.container}
        >

            <QuantityCounter
                quantity={quantity}
                increment={handleIncrementQuantity}
                decrement={handleDecrementQuantity}
            />

            <Button
                variant='solid'
                color='beige'
                onClick={handleAddToCart}
            >
                ADD TO CART
            </Button>

        </div>
    )
}