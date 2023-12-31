import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Hero.module.css'
import useResponsiveImage from '../../hooks/useResponsiveImage'

export default function Hero() {
    const imgSize = useResponsiveImage({
        mobileMax: '(max-width: 480px)',
        tabletMax: '(max-width: 768px)'
    })

    return (
        <section
            className={styles.hero}
        >

            <img
                src={`hero-${imgSize}.jpg`}
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
                        to='/headphones/xx99-mark-two-headphones'
                    >
                        SEE PRODUCT
                    </Link>

                </Button>

            </div>

        </section>
    )
}