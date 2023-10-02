import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../util/formatCurrency'
import Button from '../Button/Button'
import styles from './Cart.module.css'
import { CartContext } from '../../contexts/CartContext'
import { calculateCartTotal } from '../../util/calculateCartTotal'
import CartItem from '../CartItem/CartItem'

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
                    <CartItem
                        key={item.id}
                        item={item}
                        updateQuantity
                        incrementQuantity={() => incrementQuantity(item.id)}
                        decrementQuantity={() => decrementQuantity(item.id)}
                    />
                ))}

            </div>

            <div
                className={styles.total}
            >

                <p>
                    TOTAL
                </p>

                <span>
                    {formatCurrency(calculateCartTotal(cart))}
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