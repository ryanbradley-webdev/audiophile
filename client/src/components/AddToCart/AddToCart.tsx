import Button from '../Button/Button'
import styles from './AddToCart.module.css'

export default function AddToCart() {
  return (
    <div
        className={styles.container}
    >

        <div
            className={styles.quantity}
        >

            <button>
                -
            </button>

            <span>
                1
            </span>

            <button>
                +
            </button>

        </div>

        <Button
            variant='solid'
            color='beige'
        >
            ADD TO CART
        </Button>

    </div>
  )
}