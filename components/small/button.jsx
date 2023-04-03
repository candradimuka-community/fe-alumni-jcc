import Link from "next/link"

const Button = ({
    children = '',
    navigation = false,
    variant = 'yellow', // yellow, blue, green
    className = '',
    onClick = null,
    href = '',
    ...otherProps
}) => {
    if (navigation){
        <Link href={href} className={`bg-primary-${variant} px-4 py-2 rounded-md ${className}`} onClick={onClick} {...otherProps}>
            {children}
        </Link>
    }
    return (
        <button className={`${ variant === 'yellow' ? 'bg-primary-yellow' : variant === 'green' ? 'bg-primary-green' : 'bg-primary-blue' } px-4 py-2 rounded-md ${className}`} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
}
export default Button