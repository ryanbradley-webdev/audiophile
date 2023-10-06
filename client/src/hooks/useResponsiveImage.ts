import useMediaQuery from "./useMediaQuery"

interface ImagePaths {
    mobile: string
    tablet: string
    desktop: string
}

interface Breakpoints {
    mobileMax: string
    tabletMax: string
}

export default function useResponsiveImage(imagePaths: ImagePaths | undefined, breakpoints: Breakpoints) {
    const isMobile = useMediaQuery(breakpoints.mobileMax)

    const isTablet = useMediaQuery(breakpoints.tabletMax)

    if (!imagePaths) {
        return ''
    }

    return (
        isMobile ? imagePaths.mobile :
        isTablet ? imagePaths.tablet :
        imagePaths.desktop
    )
}