interface LinkProps {
    href: string;
    text: string;
    scroll?: boolean;
    borderColor?: string;
    backgroundColor?: string;
    fontColor?: string;

}

export const ButtonLink = ({href, text, scroll, borderColor, backgroundColor, fontColor}: LinkProps) => <a href={href}>{text}</a>