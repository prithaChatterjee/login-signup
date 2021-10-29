import React from "react"
import inputstyle from "./input.module.css"
type InputProps<T> = {
    key?: string
    value: T,
    name: string,
    type?: "text" | "number" | "password",
    required?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    error?: boolean,
    helpertext?: string,
    style?: React.CSSProperties,
    className?: string,
}

const Input = <T extends string | number>(props: InputProps<T>) => {
    const { value, name, required = false, type = "text", label, onChange, error = false, style, className, helpertext, key} = props
    return (
        <div style={style} className={className}>
            <div className={`${inputstyle.input_group} ${error && inputstyle.error}`}>
                <input key={key} type={type} name={name} value={value} id={name} placeholder=" " required={required}
                    onChange={(e) => onChange && onChange(e)} />
                <label htmlFor={name}>{label}</label>
            </div>
            {
                helpertext &&
                <span className={inputstyle.errorText}>{helpertext}</span>
            }
        </div>
    )
}

export default Input