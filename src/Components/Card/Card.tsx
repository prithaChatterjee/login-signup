import { CSSProperties } from "react";
import cssStyle from "./card.module.css";

type CardProps = {
    children?: React.ReactNode,
    style?: CSSProperties,
    className?: string,
}
const Card = (props: CardProps) => {
    const {children, style, className} = props
    return (
        <div style={style} className={`${cssStyle.fullWidth} ${className}`}>{children}</div>
    )
}

export default Card