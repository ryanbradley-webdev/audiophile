import { useParams } from 'react-router-dom'
import { SAMPLE_DATA } from '../../sample-data/data'
import styles from './Product.module.css'

export default function Product() {
    const { slug } = useParams()

    const product = SAMPLE_DATA.find(item => item.slug === slug)

    

    return (
        <section
            className={styles.section}
        >
            
            {
                product ? (
                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        width='100%'
                        height='auto'
                    />
                ) : (
                    'Not Found'
                )
            }

        </section>
    )
}