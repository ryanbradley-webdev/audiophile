import styles from './Button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: string
    type: 'button' | 'submit'
    disabled?: boolean
}

export default function Button({
    variant,
    type,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${styles.button} ${variant}`}
            {...props}
        >

            {props.children}

        </button>
    )
}