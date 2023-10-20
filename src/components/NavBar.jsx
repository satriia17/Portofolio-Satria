import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

const NavBar = () => {
const [nav, setNav] = useState(false);
const links = [
    {
        id: 1,
        link: "home",
    },
    {
        id: 2,
        link: "about",
    },
    {
        id: 3,
        link: "stack",
    },
    {
        id: 4,
        link: "certificate",
    },
    {
        id: 5,
        link: "contact",
    },
    ];

    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-50 bg-gray-900 fixed z-[9999999]">
        <div className="select-none">
            <h1 className="text-4xl font-signature ml-2">ARS</h1>
        </div>

        <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-50 hover:scale-105 duration-200"
            >
            <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>

        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="rounded-lg absolute top-full right-4 w-full max-w-[250px] bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
                <li key={id} className="cursor-pointer capitalize py-2 mx-8">
                <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                >
                    {link}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
    };

export default NavBar;
