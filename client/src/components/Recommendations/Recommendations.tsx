import { Link } from "react-router-dom"
import { SAMPLE_DATA } from "../../sample-data/data"
import Button from "../Button/Button"
import styles from './Recommendations.module.css'

export default function Recommendations({
    id,
    category
}: {
    id: string
    category: Path
}) {
    const generateRecommendations = () => {
        const recommendations: Product[] = []

        SAMPLE_DATA.filter(data => (
            data.category === category && data.id !== id
        )).forEach(item => {
            recommendations.push(item)
        })

        if (recommendations.length < 3) {
            SAMPLE_DATA.filter(data => (
                data.category !== category && data.category !== 'earphones'
            )).forEach(item => {
                if (recommendations.length < 3) recommendations.push (item)
            })
        }

        return recommendations
    }

    return (
        <div>
            
            <h3
                className={styles.head}
            >
                YOU MAY ALSO LIKE
            </h3>
            
            <div
                className={styles.card_list}
            >

                {generateRecommendations().map((rec, idx) => (
                    <div
                        key={idx}
                        className={styles.card}
                    >

                        <img
                            src={rec.preview_img}
                            alt={rec.name}
                            width='100%'
                            height='auto'
                        />

                        <h5>
                            {rec.name}
                        </h5>

                        <Button
                            variant="solid"
                            color="beige"
                        >

                            <Link
                                to={`/${rec.category}/${rec.slug}`}
                            >
                                SEE PRODUCT
                            </Link>

                        </Button>

                    </div>
                ))}

            </div>

        </div>
    )
}