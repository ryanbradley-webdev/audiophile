import { Outlet, useLocation } from "react-router-dom";
import AboutCard from "../AboutCard/AboutCard";
import Nav from "../Nav/Nav";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function CategoryPageWrapper() {
    const location = useLocation()

    const isSmallScreen = useMediaQuery('(max-width: 480px)')

    const localStyles = {
        div: {
            display: 'grid',
            placeItems: 'center',
            height: 102,
            backgroundColor: 'var(--clr-black-900)'
        },
        h2: {
            font: 'var(--font-product-head)',
            color: 'var(--clr-white-900)',
            letterSpacing: isSmallScreen ? '2px' : 'var(--space-product-head)'
        }
    }

    return (
        <main>

            {
                (location.pathname === '/headphones' ||
                location.pathname === '/speakers' ||
                location.pathname === '/earphones') && (
                    <div style={localStyles.div}>
                        <h2 style={localStyles.h2}>
                            {location.pathname.replace('/', '').toUpperCase()}
                        </h2>
                    </div>
                )
            }

            <Outlet />

            <Nav />

            <AboutCard />

        </main>
    )
}