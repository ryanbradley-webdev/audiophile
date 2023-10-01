import { Link, useNavigate } from "react-router-dom"
import styles from './BackLink.module.css'

export default function BackLink() {
    const navigate = useNavigate()

    return (
        <Link
            to=''
            onClick={() => navigate(-1)}
            className={styles.link}
        >
            Go Back
        </Link>
    )
}