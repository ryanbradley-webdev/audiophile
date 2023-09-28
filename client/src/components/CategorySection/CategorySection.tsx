import { ReactNode } from 'react'
import styles from './CategorySection.module.css'

export default function CategorySection({
    children
}: {
    children: ReactNode
}) {
    return (
        <section
            className={styles.section}
        >

            {children}

        </section>
    )
}