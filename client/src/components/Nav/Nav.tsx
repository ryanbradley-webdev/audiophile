import { Link } from 'react-router-dom'
import RightArrowIcon from '../../assets/RightArrowIcon'
import Headphones from './images/image-category-thumbnail-headphones.png'
import Speakers from './images/image-category-thumbnail-speakers.png'
import Earphones from './images/image-category-thumbnail-earphones.png'
import styles from './Nav.module.css'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Nav({
  toggleMenu
}: {
  toggleMenu?: () => void
}) {
  const isDesktop = useMediaQuery('(min-width: 769px)')

  return (
    <nav
      className={styles.nav}
    >
        
      {
        isDesktop ? (
          <ul
            className={styles.desktop_navbar}
          >

            <li>
              <Link to='/'>
                HOME
              </Link>
            </li>

            {items.map(path => (
              <li
                key={path}
              >
                <Link
                  to={'/' + path}
                >
                  {path.toUpperCase()}
                </Link>
              </li>
            ))}

          </ul>
        ) : (
          items.map((item, idx) => (
            <NavItem
              key={idx}
              path={item}
              toggleMenu={toggleMenu}
            />
          ))
        )
      }

    </nav>
  )
}

function NavItem({
  path,
  toggleMenu
}: {
  path: 'headphones' | 'speakers' | 'earphones'
  toggleMenu?: () => void
}) {
  const src =
    path === 'headphones' ? Headphones
    : path === 'speakers' ? Speakers
    : Earphones

  return (
    <Link
      to={'/' + path}
      className={styles.link}
      onClick={toggleMenu}
    >

      <img
        src={src}
        alt={path}
        height={134}
        width='auto'
      />
  
      <h6>
        {path}
      </h6>

      <div
        className={styles.shop_btn}
      >
          
        <span>
          SHOP
        </span>

        <RightArrowIcon />

      </div>
    
    </Link>
  )
}

const items: Path[] = [
  'headphones',
  'speakers',
  'earphones'
]
