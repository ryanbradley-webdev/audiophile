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
    const [validEmail, setValidEmail] = useState(true)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValid(e.target.value !== '')

        if (type === 'email') {
            setValidEmail(e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]{2}/) !== null)
        }

        onChange(e.target.value)
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) onChange(e.target.value)
    }

    const content = type !== 'radio' ? (
        <label
            htmlFor={props.htmlFor}
            className={styles.label}
            aria-invalid={!valid}
            data-invalid-email={type === 'email' && !validEmail}
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
                className={styles.input}
            />

        </label>
    ) : (
        <div
            className={styles.radio_container}
        >

            <span>
                {label}
            </span>

            {props.options.map((option, idx) => (
                <label
                    className={styles.radio_label}
                    key={idx}
                >
    
                    <input
                        type="radio"
                        value={option}
                        checked={option === value}
                        onChange={handleRadioChange}
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