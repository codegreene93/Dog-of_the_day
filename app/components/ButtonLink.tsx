interface LinkProps {
    href: string,
    text: string,
    scroll?: boolean,
    borderColor?: string,
    backgroundColor?: string,
    fontColor?: string,
    className?: string
}

export const ButtonLink = ({href, text, scroll, borderColor, backgroundColor, fontColor, className}: LinkProps) => <a
    href={href} className={className}>{text}</a>