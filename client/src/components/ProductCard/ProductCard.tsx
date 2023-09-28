import styles from './ProductCard.module.css'

export default function ProductCard({
    name,
    preview_img,
    description,
    index
}: Product & {
    index: number
}) {


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

            {!index && (
                <h6>
                    NEW PRODUCT
                </h6>
            )}

            <h3>
                {name.toUpperCase()}
            </h3>

            <p>
                {description}
            </p>

        </div>
    )
}