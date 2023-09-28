import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import RightArrowIcon from '../../assets/RightArrowIcon'

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
    return (
        <Link
            to={path}
            className={styles.link}
        >
        
            <h6>
                {path}
            </h6>

            <div>
                
                <span>
                    SHOP
                </span>

                <RightArrowIcon />

            </div>
        
        </Link>
    )
}