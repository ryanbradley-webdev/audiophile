import { useState } from 'react'
import Button from '../Button/Button'
import styles from './AddToCart.module.css'
import QuantityCounter from '../QuantityCounter/QuantityCounter'

export default function AddToCart() {
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
        // TODO add logic for adding product to cart
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