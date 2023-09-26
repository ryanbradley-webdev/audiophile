import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer
            className={styles.footer}
        >

            <Logo />

            <ul
                className={styles.links}
            >

                <Link
                    to='/'
                >
                    HOME
                </Link>

                <Link
                    to='/headphones'
                >
                    HEADPHONES
                </Link>

                <Link
                    to='/speakers'
                >
                    SPEAKERS
                </Link>

                <Link
                    to='/earphones'
                >
                    EARPHONES
                </Link>

            </ul>

        </footer>
    )
}