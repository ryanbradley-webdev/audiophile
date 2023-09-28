import { useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header
            className={styles.header}
        >

            <Hamburger
                onClick={handleToggleMenu}
            />

            {menuVisible && <Nav />}

            <Logo />

            <CartIcon />

        </header>
    )
}