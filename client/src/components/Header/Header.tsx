import { useEffect, useState } from 'react'
import CartIcon from '../../assets/CartIcon'
import Hamburger from '../../assets/Hamburger'
import Logo from '../../assets/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import useHeaderBackground from '../../hooks/useHeaderBackground'
import Modal from '../Modal/Modal'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)

  const isDesktop = useMediaQuery('(min-width: 769px)')

  const backgroundColor = useHeaderBackground()

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const handleToggleCart = () => {
    setCartVisible(!cartVisible)
  }

  useEffect(() => {
    if (isDesktop) {
      setMenuVisible(true)
    }
  }, [isDesktop])

  return (
    <header
      className={styles.header}
      style={{ backgroundColor }}
    >

      <Hamburger
        onClick={handleToggleMenu}
      />

      <Link
        to='/'
        style={{
          display: 'flex'
        }}
      >
        <Logo />
      </Link>

      {menuVisible && (
        <Nav
          toggleMenu={handleToggleMenu}
        />
      )}

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
