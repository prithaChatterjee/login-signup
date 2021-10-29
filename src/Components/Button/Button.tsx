import React from "react";
import buttonstyle from "./button.module.css";

type ButtonProps = {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    style?: React.CSSProperties,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    fullWidth?: boolean
}

const Button = (props: ButtonProps) => {
    const {children, onClick, type="button", style, className, fullWidth} = props
    return (
        <button type={type} style={style}
         className={`${buttonstyle.primary} ${className} ${fullWidth && "fullWidth"}`} onClick={(event) => onClick && onClick(event)}>{children}</button>
    )
}

export default Button