import CategorySection from "../../components/CategorySection/CategorySection"

const PLACEHOLDER_HEADPHONES = [
    {
        id: '1',
        name: 'X99 Mark II',
        preview_image: '/x99-mark-two-category-preview'
    },
    {
        id: '2',
        name: 'X99 Mark I',
        preview_image: '/x99-mark-one-category-preview'
    },
    {
        id: '3',
        name: 'X59',
        preview_image: '/x59-category-preview'
    }
]

export default function Headphones() {
    return (
        <CategorySection>
            
            {PLACEHOLDER_HEADPHONES.map(item => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))}

        </CategorySection>
    )
}