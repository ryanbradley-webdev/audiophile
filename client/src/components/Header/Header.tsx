import { useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import useHeaderBackground from '../../hooks/useHeaderBackground'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const backgroundColor = useHeaderBackground()

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header
            className={styles.header}
            style={{ backgroundColor }}
        >

            <Hamburger
                onClick={handleToggleMenu}
            />

            {menuVisible && (
                <Nav
                    toggleMenu={handleToggleMenu}
                />
            )}

            <Logo />

            <CartIcon />

        </header>
    )
}