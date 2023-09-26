import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'
import styles from './Footer.module.css'
import FacebookIcon from '../../assets/FacebookIcon'
import TwitterIcon from '../../assets/TwitterIcon'
import InstagramIcon from '../../assets/InstagramIcon'

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

            <p>
                Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>

            <p>
                Copyright 2021. All Rights Reserved.
            </p>

            <div
                className={styles.socials}
            >

                <button>
                    <FacebookIcon />
                </button>

                <button>
                    <TwitterIcon />
                </button>

                <button>
                    <InstagramIcon />
                </button>

            </div>

        </footer>
    )
}