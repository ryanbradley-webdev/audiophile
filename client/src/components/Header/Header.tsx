import { useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const location = useLocation()

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header
            className={styles.header}
            style={{
                backgroundColor: location.pathname === '/' ? '' : 'var(--clr-black-900)'
            }}
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