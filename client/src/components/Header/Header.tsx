import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header
            className={styles.header}
        >

            <Hamburger />

            <Logo />

            <CartIcon />

        </header>
    )
}