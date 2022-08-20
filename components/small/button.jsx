import Link from "next/link"

const Button = ({
    children = '',
    navigation = false,
    variant = 'yellow', // yellow, blue, green
    className = '',
    onClick = null,
    href = ''
}) => {
    if (navigation){
        <Link href={href} className={`bg-primary-${variant} p-4 rounded-md ${className}`} onClick={onClick}>
            {children}
        </Link>
    }
    return (
        <button className={`${ variant === 'yellow' ? 'bg-primary-yellow' : variant === 'green' ? 'bg-primary-green' : 'bg-primary-blue' } p-4 rounded-md ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button