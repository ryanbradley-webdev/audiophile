import CategorySection from "../../components/CategorySection/CategorySection"
import ProductCard from "../../components/ProductCard/ProductCard"

const PLACEHOLDER_HEADPHONES: Product[] = [
    {
        id: '1',
        name: 'X99 Mark II',
        preview_img: '/x99-mark-two-category-preview.jpg',
        category: 'headphones',
        description: ''
    },
    {
        id: '2',
        name: 'X99 Mark I',
        preview_img: '/x99-mark-one-category-preview.jpg',
        category: 'headphones',
        description: ''
    },
    {
        id: '3',
        name: 'X59',
        preview_img: '/x59-category-preview.jpg',
        category: 'headphones',
        description: ''
    }
]

export default function Headphones() {
    return (
        <CategorySection>
            
            {PLACEHOLDER_HEADPHONES.map((item, idx) => (
                <ProductCard
                    key={item.id}
                    index={idx}
                    {...item}
                />
            ))}

        </CategorySection>
    )
}