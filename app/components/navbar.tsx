import React, {ComponentType, ReactNode} from "react";
import {Logo} from "@/app/Images/Logo";
import Link from "next/link";

interface NavProps{
    logo: Element;
    onClick?: () => void;
    rightButtonText?: string;
    centreListItems?: ReactNode;
}

export const Navbar = ({onClick, rightButtonText, centreListItems, logo}: NavProps) => {
    return (
        <div className="navbar bg-sky-500 shadow-sm">
            <div className="flex flex-grow justify-between">
               <Link className={"pl-8"} to="/" href="/">
                   <Logo />
               </Link>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
                        {centreListItems}
                    </ul>
                <button className="btn pr-8" onClick={onClick}>{rightButtonText}</button>
            </div>
        </div>
    )
}