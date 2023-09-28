import { HTMLAttributes } from "react"

export default function Hamburger({
    ...props
}: HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            onClick={props.onClick}
            {...props}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                height: 'fit-content',
                width: 'fit-content'
            }}
        >
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/>
                </g>
            </svg>
        </button>
    )
}