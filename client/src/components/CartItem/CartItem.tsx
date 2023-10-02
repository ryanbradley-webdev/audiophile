import { formatCurrency } from '../../util/formatCurrency'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import styles from './CartItem.module.css'

type CartItemProps = UpdateableCartItem | StaticCartItem

type UpdateableCartItem = {
    item: CartItem
    updateQuantity: true
    incrementQuantity: () => void
    decrementQuantity: () => void
}

type StaticCartItem = {
    item: CartItem
    updateQuantity?: false
}

export default function CartItem(props: CartItemProps) {
    const { item, updateQuantity } = props

    return (
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

            {
                updateQuantity ? (
                    <QuantityCounter
                        quantity={item.quantity}
                        increment={props.incrementQuantity}
                        decrement={props.decrementQuantity}
                    />
                ) : (
                    <p
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        x{item.quantity}
                    </p>
                )
            }

        </div>
    )
}