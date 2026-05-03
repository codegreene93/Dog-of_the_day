import Link from 'next/link'

     interface NavLinkProps{
    title: string;
     href: string;
    }

const NavItem  = ({title, href}:NavLinkProps) => {
    return(
        <Link href={href}>{title}</Link>
    )
}