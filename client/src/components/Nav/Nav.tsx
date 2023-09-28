import { Link } from 'react-router-dom'
import RightArrowIcon from '../../assets/RightArrowIcon'
import Headphones from './images/image-category-thumbnail-headphones.png'
import Speakers from './images/image-category-thumbnail-speakers.png'
import Earphones from './images/image-category-thumbnail-earphones.png'
import styles from './Nav.module.css'

export default function Nav() {
    const items: Path[] = [
        'headphones',
        'speakers',
        'earphones'
    ]

    return (
        <nav
            className={styles.nav}
        >
            
            {
                items.map((item, idx) => (
                    <NavItem key={idx} path={item} />
                ))
            }

        </nav>
    )
}

function NavItem({
    path
}: {
    path: 'headphones' | 'speakers' | 'earphones'
}) {
    const src =
        path === 'headphones' ? Headphones
        : path === 'speakers' ? Speakers
        : Earphones

    return (
        <Link
            to={path}
            className={styles.link}
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