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

        </main>
    )
}