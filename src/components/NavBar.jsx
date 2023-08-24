import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

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
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div className="">
            <h1 className="text-4xl font-signature ml-2">ARS</h1>
        </div>
        
        <ul className="hidden md:flex">
        {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">{link}</li>
        ))}
        </ul>
        
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
        
        {nav && (
        <ul className="rounded-lg absolute top-full right-4 w-full max-w-[250px] bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({id, link}) => (
            <li key={id} className="cursor-pointer capitalize py-2 mx-8">{link}</li>
        ))} 
        </ul>
        )}
    </div>
    );
};

export default NavBar;
