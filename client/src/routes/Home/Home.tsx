import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'
import ZX9 from './images/image-speaker-zx9.png'
import Background from '/pattern-circles.svg'
import styles from './Home.module.css'

export default function Home() {
    return (
        <main
            className={styles.main}
        >

            <Hero />

            <Nav />

            <section
                className={styles.products}
            >

                <div
                    className={styles.featured_product}
                >

                    <div
                        className={styles.img_container}
                    >

                        <img
                            src={Background}
                            alt=''
                            className={styles.background}
                        />

                        <img
                            src={ZX9}
                            alt='zx9'
                            width='50%'
                            height='auto'
                        />

                    </div>

                    <h2>
                        ZX9<br />SPEAKER
                    </h2>

                    <p>
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>

                    <Button
                        variant='solid'
                        color='black'
                    >

                        <Link
                            to='/speakers/zx9'
                        >
                            SEE PRODUCT
                        </Link>

                    </Button>

                </div>

            </section>

        </main>
    )
}