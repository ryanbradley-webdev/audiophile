import { Link } from 'react-router-dom'

export default function Nav() {
    const items: Path[] = [
        'headphones',
        'speakers',
        'earphones'
    ]

    return (
        <nav>
            
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
        >
        
            {path}
        
        </Link>
    )
}