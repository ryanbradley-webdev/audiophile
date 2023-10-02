import { formatCurrency } from '../../util/formatCurrency'
import styles from './CheckoutCosts.module.css'

export default function CheckoutCosts({
    total,
    vat
}: {
    total: number
    vat: number
}) {
    const shipping = total ? 50 : 0

    return (
        <div
            className={styles.price_container}
        >

            <div>
            
                <p>
                    TOTAL
                </p>

                <span>
                    {formatCurrency(total)}
                </span>

            </div>

            <div>
                
                <p>
                    SHIPPING
                </p>

                <span>
                    $ {shipping}
                </span>

            </div>

            <div>
                
                <p>
                    VAT (INCLUDED)
                </p>

                <span>
                    {formatCurrency(vat)}
                </span>

            </div>

            <div>
                
                <p>
                    GRAND TOTAL
                </p>

                <span>
                    {formatCurrency(total + shipping)}
                </span>

            </div>

        </div>
    )
}