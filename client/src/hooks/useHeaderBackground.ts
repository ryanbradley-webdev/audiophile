import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function useHeaderBackground() {
    const location = useLocation()

    const [backgroundColor, setBackgroundColor] = useState(location.pathname === '/' ? '' : 'var(--clr-black-900)')

    useEffect(() => {
        const listener = () => {
            setBackgroundColor(window.scrollY < 100 ? '' : 'var(--clr-black-900)')
        }

        if (location.pathname !== '/') {
            setBackgroundColor('var(--clr-black-900)')
        } else {
            setBackgroundColor(window.scrollY < 100 ? '' : 'var(--clr-black-900)')

            window.addEventListener('scroll', listener)
        }

        return () => window.removeEventListener('scroll', listener)
    }, [location.pathname])

    return backgroundColor
}