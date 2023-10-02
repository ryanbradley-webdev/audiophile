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
    emptyCart: () => void
}

type CheckoutData = {
    name: string
    email: string
    phone: string
    address: string
    zip: string
    city: string
    country: string
    payment_method: 'e-Money' | 'Cash on Delivery'
    e_money_number: string
    pin: string
}

type CheckoutAction = {
    type: string
    payload: string
}