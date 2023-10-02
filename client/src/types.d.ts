type Path = 'headphones' | 'speakers' | 'earphones'

type Product = {
    id: string
    name: string
    slug: string
    category: Path
    image: {
        desktop: string
        tablet: string
        mobile: string
    }
    preview_img: string
    description: string
    features: string
    isNew: boolean
    price: number
    includes: { quantity: number, item: string }[]
    gallery: {
        desktop: string[]
        tablet: string[]
        mobile: string[]
    }
}

type CartItem = Product & {
    quantity: number
}

type CartContext = {
    cart: CartItem[]
    incrementQuantity: (id: string) => void
    decrementQuantity: (id: string) => void
    removeItemFromCart: (id: string) => void
}