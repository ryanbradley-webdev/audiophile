import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext({} as CartContext)

export default function CartProvider({
    children
}: {
    children: ReactNode
}) {
    const [cart, setCart] = useState<CartItem[]>(SAMPLE_CART)

    const incrementQuantity = (id: string) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                return ({
                    ...item,
                    quantity: item.quantity + 1
                })
            }

            return item
        }))
    }

    const decrementQuantity = (id: string) => {
        if (cart.find(item => item.id === id)?.quantity === 1) {
            removeItemFromCart(id)
        } else {
            setCart(prev => prev.map(item => {
                if (item.id === id) {
                    return ({
                        ...item,
                        quantity: item.quantity - 1
                    })
                }

                return item
            }))
        }
    }

    const removeItemFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const value = {
        cart,
        incrementQuantity,
        decrementQuantity,
        emptyCart
    }

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    )
}

const SAMPLE_CART: CartItem[] = [
    {
        id: '4',
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          desktop: '',
          tablet: '',
          mobile: ''
        },
        category: "headphones",
        preview_img: '/x99-mark-two-category-preview.jpg',
        isNew: true,
        price: 2999,
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        includes: [
          {
            quantity: 1,
            item: "Headphone unit"
          },
          {
            quantity: 2,
            item: "Replacement earcups"
          },
          {
            quantity: 1,
            item: "User manual"
          },
          {
            quantity: 1,
            item: "3.5mm 5m audio cable"
          },
          {
            quantity: 1,
            item: "Travel bag"
          }
        ],
        gallery: {
          desktop: [
            '',
            '',
            ''
          ],
          tablet: [
            '',
            '',
            ''
          ],
          mobile: [
            '',
            '',
            ''
          ]
        },
        quantity: 1
    },
    {
        id: '2',
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          desktop: '',
          tablet: '',
          mobile: ''
        },
        category: "headphones",
        preview_img: '/x59-category-preview.jpg',
        isNew: false,
        price: 899,
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        includes: [
          {
            quantity: 1,
            item: "Headphone unit"
          },
          {
            quantity: 2,
            item: "Replacement earcups"
          },
          {
            quantity: 1,
            item: "User manual"
          },
          {
            quantity: 1,
            item: "3.5mm 5m audio cable"
          }
        ],
        gallery: {
          desktop: [
            '',
            '',
            ''
          ],
          tablet: [
            '',
            '',
            ''
          ],
          mobile: [
            '',
            '',
            ''
          ]
        },
        quantity: 1
    },
    {
        id: '1',
        slug: "yx1-earphones",
        name: "YX1 Wireless",
        image: {
          desktop: '',
          tablet: '',
          mobile: ''
        },
        category: "earphones",
        preview_img: '/yx1-category-preview.jpg',
        isNew: true,
        price: 599,
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        includes: [
          {
            quantity: 2,
            item: "Earphone unit"
          },
          {
            quantity: 6,
            item: "Multi-size earplugs"
          },
          {
            quantity: 1,
            item: "User manual"
          },
          {
            quantity: 1,
            item: "USB-C charging cable"
          },
          {
            quantity: 1,
            item: "Travel pouch"
          }
        ],
        gallery: {
          desktop: [
            '',
            '',
            ''
          ],
          tablet: [
            '',
            '',
            ''
          ],
          mobile: [
            '',
            '',
            ''
          ]
        },
        quantity: 1
    }
]