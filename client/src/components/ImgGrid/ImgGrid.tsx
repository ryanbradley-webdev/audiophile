import styles from './ImgGrid.module.css'

export default function ImgGrid({
    images
}: {
    images: string[]
}) {
    return (
        <div
            className={styles.grid}
        >

            {images.map((image, idx) => (
                <img
                    src={image}
                    alt=''
                    width='100%'
                    height='auto'
                    key={idx}
                />
            ))}

        </div>
    )
}