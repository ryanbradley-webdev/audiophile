import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section
            className={styles.hero}
        >

            <img
                src='/hero-mobile.png'
                alt=''
                className={styles.hero_img}
            />

            <div
                className={styles.hero_content}
            >

                <h2>
                    NEW PRODUCT
                </h2>

                <h1>
                    XX99 Mark II Headphones
                </h1>

                <p>
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>

                <Button
                    variant='solid'
                    color='beige'
                >
                    
                    <Link
                        to='/headphones/xx99'
                    >
                        SEE PRODUCT
                    </Link>

                </Button>

            </div>

        </section>
    )
}