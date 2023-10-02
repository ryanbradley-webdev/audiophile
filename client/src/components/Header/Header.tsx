import { useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import useHeaderBackground from '../../hooks/useHeaderBackground'
import Modal from '../Modal/Modal'
import Cart from '../Cart/Cart'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)
    const [cartVisible, setCartVisible] = useState(false)

    const backgroundColor = useHeaderBackground()

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const handleToggleCart = () => {
        setCartVisible(!cartVisible)
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

            <CartIcon
                onClick={handleToggleCart}
            />

            {cartVisible && (
                <Modal
                    toggleModal={handleToggleCart}
                >

                    <Cart
                        toggleCart={handleToggleCart}
                    />

                </Modal>
            )}

        </header>
    )
}