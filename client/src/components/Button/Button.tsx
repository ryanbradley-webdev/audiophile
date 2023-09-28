import styles from './Button.module.css'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    color?: 'beige' | 'black'
    type?: 'button' | 'submit'
    disabled?: boolean
} & ({
    variant: 'solid'
    color: 'beige' | 'black'
} | {
    variant: 'outline'
})

export default function Button({
    variant,
    color,
    type,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${styles.button} ${variant === 'solid' && styles[color]} ${styles[variant]}`}
            {...props}
        >

            {props.children}

        </button>
    )
}