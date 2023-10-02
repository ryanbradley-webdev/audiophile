import { ReactNode, useRef } from "react"
import styles from './Modal.module.css'

export default function Modal({
    children,
    toggleModal
}: {
    children: ReactNode
    toggleModal: () => void
}) {
    const modalRef = useRef<HTMLDivElement>(null)

    const handleCloseModal = (e: React.MouseEvent) => {
        if (e.target === modalRef?.current) toggleModal()
    }

    return (
        <div
            className={styles.modal_container}
            onClick={handleCloseModal}
            ref={modalRef}
        >

            <div
                className={styles.modal}
            >

                {children}

            </div>

        </div>
    )
}