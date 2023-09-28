import CategorySection from "../../components/CategorySection/CategorySection"
import ProductCard from "../../components/ProductCard/ProductCard"
import { SAMPLE_DATA } from "../../sample-data/data"

export default function Speakers() {
    return (
        <CategorySection>

            {SAMPLE_DATA.filter(item => item.category === 'speakers').reverse().map(item => (
                <ProductCard
                    key={item.id}
                    {...item}
                />
            ))}
            
        </CategorySection>
    )
}