import { useSyncExternalStore } from "react"

export default function useMediaQuery(query: string) {
    const getSnapshot = () => {
        return window.matchMedia(query).matches
    }

    const subscribe = (cb: () => void) => {
        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }

    const matches = useSyncExternalStore(subscribe, getSnapshot)

    return matches
}
