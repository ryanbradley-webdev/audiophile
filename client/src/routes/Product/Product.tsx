import { Link, useNavigate, useParams } from 'react-router-dom'
import { SAMPLE_DATA } from '../../sample-data/data'
import styles from './Product.module.css'
import { formatCurrency } from '../../util/formatCurrency'
import AddToCart from '../../components/AddToCart/AddToCart'

export default function Product() {
    const { slug } = useParams()

    const navigate = useNavigate()

    const product = SAMPLE_DATA.find(item => item.slug === slug)

    

    return (
        <section
            className={styles.section}
        >

            <Link
                to=''
                onClick={() => navigate(-1)}
            >
                Go Back
            </Link>
            
            {
                product ? (
                    <>
                    
                        <div
                            className={styles.heading}
                        >

                            <img
                                src={product.image.mobile}
                                alt={product.name}
                                width='100%'
                                height='auto'
                            />

                            <div>
                                
                                {product.isNew && (
                                    <h6>
                                        NEW PRODUCT
                                    </h6>
                                )}

                                <h2>
                                    {product.name.toUpperCase()}<br />{product.category.toUpperCase()}
                                </h2>

                                <p>
                                    {product.description}
                                </p>

                                <h5>
                                    {formatCurrency(product.price)}
                                </h5>

                                <AddToCart />

                            </div>

                        </div>

                    </>
                ) : (
                    'Not Found'
                )
            }

        </section>
    )
}