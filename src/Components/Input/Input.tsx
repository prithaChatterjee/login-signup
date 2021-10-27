import "./input.css"
type InputProps<T> = {
    value: T,
    name: string,
    type?: "text" | "number",
    required?: boolean,
    onChange?: (value: any) => void,
    label?: string,
    error?: boolean | string,
    helpertext?: string,
}

const Input = <T extends string | number>(props: InputProps<T>) => {
    const { value, name, required = false, type = "text", label, onChange, error = false} = props
    return (
        <div className={`input-group ${error && "error"}`}>
            <input type={type} name={name} value={value} id={name} placeholder=" " required={required} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Input