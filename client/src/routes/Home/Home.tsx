import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'
import styles from './Home.module.css'

export default function Home() {
    return (
        <main
            className={styles.main}
        >

            <Hero />

            <Nav />

            <section>

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

            </section>

        </main>
    )
}