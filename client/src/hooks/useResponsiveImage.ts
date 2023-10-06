import useMediaQuery from "./useMediaQuery"

interface Breakpoints {
    mobileMax: string
    tabletMax: string
}

export default function useResponsiveImage(breakpoints: Breakpoints) {
    const isMobile = useMediaQuery(breakpoints.mobileMax)

    const isTablet = useMediaQuery(breakpoints.tabletMax)

    return (
        isMobile ? 'mobile' :
        isTablet ? 'tablet' :
        'desktop'
    )
}