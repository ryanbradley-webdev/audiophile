import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './ProductCard.module.css'

export default function ProductCard({
    name,
    slug,
    preview_img,
    category,
    description,
    isNew
}: Product) {


    return (
        <div
            className={styles.card}
        >

            <img
                src={preview_img}
                alt={name}
                width='100%'
                height='auto'
            />

            <div
                className={styles.content}
            >

                {isNew && (
                    <h6>
                        NEW PRODUCT
                    </h6>
                )}

                <h3>
                    {name.toUpperCase()}<br />{category.toUpperCase()}
                </h3>

                <p>
                    {description}
                </p>

                <Button
                    variant='solid'
                    color='beige'
                >

                    <Link
                        to={slug}
                    >
                        SEE PRODUCT
                    </Link>

                </Button>

            </div>

        </div>
    )
}