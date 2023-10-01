import { formatCurrency } from '../../util/formatCurrency'
import styles from './CheckoutCosts.module.css'

export default function CheckoutCosts({
    total,
    vat
}: {
    total: number
    vat: number
}) {
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
                    $ 50
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
                    {formatCurrency(total + 50)}
                </span>

            </div>

        </div>
    )
}