import styles from './QuantityCounter.module.css'

export default function QuantityCounter({
    quantity,
    increment,
    decrement
}: {
    quantity: number
    increment: () => void
    decrement: () => void
}) {
    return (
        <div
            className={styles.quantity}
        >

            <button
                onClick={decrement}
            >
                -
            </button>

            <span>
                {quantity}
            </span>

            <button
                onClick={increment}
            >
                +
            </button>

        </div>
    )
}