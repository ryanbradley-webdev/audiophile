import { useState, useEffect, experimental_useEffectEvent as useEffectEvent } from "react"

export default function useMediaQuery({
    query
}: {
    query: string
}) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    const listener = useEffectEvent(() => {
        setMatches(window.matchMedia(query).matches)
    })

    useEffect(() => {
        window.addEventListener('resize', listener)

        return window.removeEventListener('resize', listener)
    }, [])

    return matches
}
