import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../util/formatCurrency'
import Button from '../Button/Button'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import styles from './Cart.module.css'
import { CartContext } from '../../contexts/CartContext'
import { calculateCartTotal } from '../../util/calculateCartTotal'

export default function Cart({
    toggleCart
}: {
    toggleCart: () => void
}) {
    const {
      cart,
      incrementQuantity,
      decrementQuantity,
      emptyCart
    } = useContext(CartContext)

    return (
        <>

            <div
                className={styles.header}
            >

                <h6>
                    CART ({cart.length})
                </h6>

                <button
                  onClick={emptyCart}
                >
                    Remove all
                </button>

            </div>

            <div
                className={styles.cart_items}
            >

                {cart.map(item => (
                    <div
                        className={styles.item}
                    >

                        <img
                            src={item.preview_img}
                            alt={item.name}
                            width={64}
                            height={64}
                        />

                        <div
                            className={styles.item_info}
                        >

                            <strong>
                                {item.name}
                            </strong>

                            <strong
                                style={{
                                    fontSize: 14,
                                    opacity: 0.5
                                }}
                            >
                                {formatCurrency(item.price)}
                            </strong>

                        </div>

                        <QuantityCounter
                            quantity={item.quantity}
                            increment={() => incrementQuantity(item.id)}
                            decrement={() => decrementQuantity(item.id)}
                        />

                    </div>
                ))}

            </div>

            <div
                className={styles.total}
            >

                <p>
                    TOTAL
                </p>

                <span>
                    {calculateCartTotal(cart)}
                </span>

            </div>
            
            <Button
                variant='solid'
                color='beige'
            >

                <Link
                    to='/checkout'
                    onClick={toggleCart}
                >
                    CHECKOUT
                </Link>

            </Button>

        </>
    )
}