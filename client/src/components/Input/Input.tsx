import { useState } from 'react'
import styles from './Input.module.css'

type InputProps = {
    label: string
    value: string
    onChange: (arg: string) => void
} & (TextProps | RadioProps)

type TextProps = {
    type: 'text' | 'email' | 'number' | 'tel'
    htmlFor: string
    placeholder: string
}

type RadioProps = {
    type: 'radio'
    options: string[]
}

export default function Input(props: InputProps) {
    const { value, onChange, type, label } = props
    
    const [valid, setValid] = useState(true)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValid(e.target.value !== '')

        onChange(e.target.value)
    }

    const content = type !== 'radio' ? (
        <label
            htmlFor={props.htmlFor}
            className={styles.label}
            aria-invalid={!valid}
        >

            <span>
                {props.label}
            </span>

            <input
                type={type}
                id={props.htmlFor}
                value={value}
                onChange={handleChange}
                placeholder={props.placeholder}
            />

        </label>
    ) : (
        <div>

            <span>
                {label}
            </span>

            {props.options.map(option => (
                <label
                    className={styles.radio_label}
                >
    
                    <input
                        type="radio"
                        value={option}
                        checked={option === value}
                    />
    
                    <span>
                        {option}
                    </span>
    
                </label>
            ))}

        </div>
    )

    return (
        <>
            {content}
        </>
    )
}