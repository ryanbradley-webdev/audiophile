import { useParams } from 'react-router-dom'
import { SAMPLE_DATA } from '../../sample-data/data'
import styles from './Product.module.css'
import { formatCurrency } from '../../util/formatCurrency'
import AddToCart from '../../components/AddToCart/AddToCart'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import Recommendations from '../../components/Recommendations/Recommendations'
import BackLink from '../../components/BackLink/BackLink'

export default function Product() {
    const { slug } = useParams()

    const product = SAMPLE_DATA.find(item => item.slug === slug)

    return (
        <section
            className={styles.section}
        >

            <BackLink />
            
            {
                product ? (
                    <section
                        className={styles.page_grid}
                    >
                    
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

                                <AddToCart
                                    product={product}
                                />

                            </div>

                        </div>

                        <div>

                            <div
                                className={styles.features}
                            >

                                <h3>
                                    FEATURES
                                </h3>

                                {
                                    product.features.split('\n\n').map((paragraph, idx) => (
                                        <p
                                            key={idx}
                                        >
                                            {paragraph}
                                        </p>
                                    ))
                                }

                            </div>

                            <div
                                className={styles.contents}
                            >

                                <h3>
                                    IN THE BOX
                                </h3>

                                <ul
                                    className={styles.box_list}
                                >

                                    {
                                        product.includes.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className={styles.box_item}
                                            >
                                                <span
                                                    className={styles.quantity}
                                                >
                                                    {item.quantity}x
                                                </span>
                                                
                                                <span
                                                    className={styles.item}
                                                >
                                                    {item.item}
                                                </span>
                                            </li>
                                        ))
                                    }

                                </ul>

                            </div>
                            
                        </div>

                        <ImgGrid
                            images={product.gallery.mobile}
                        />

                        <Recommendations
                            id={product.id}
                            category={product.category}
                        />

                    </section>
                ) : (
                    'Not Found'
                )
            }

        </section>
    )
}