import CategorySection from "../../components/CategorySection/CategorySection"
import ProductCard from "../../components/ProductCard/ProductCard"

const PLACEHOLDER_HEADPHONES: Product[] = [
    {
        id: '1',
        name: 'XX99 Mark II',
        preview_img: '/x99-mark-two-category-preview.jpg',
        category: 'headphones',
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
    },
    {
        id: '2',
        name: 'XX99 Mark I',
        preview_img: '/x99-mark-one-category-preview.jpg',
        category: 'headphones',
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
    },
    {
        id: '3',
        name: 'XX59',
        preview_img: '/x59-category-preview.jpg',
        category: 'headphones',
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastess with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
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