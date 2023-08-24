import {
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineWhatsApp,
    AiOutlineDownload,
    } from "react-icons/ai";
import mypic from "../../img/myPicture.png";
import React from 'react'

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-3xl sm:text-5xl py-2 text-teal-600 font-medium">Andhika Raffly Satria</h2>
                    <h3 className="text-2xl sm:text-2xl py-2 text-teal-500 font-medium">Junior Web Developer</h3>
                    <p className="text-md  py-2 max-w-md text-gray-500 ">Memiliki pengalaman mengikuti sertifikasi VSGA dari BPPTIK dan mendapatkan hasil <span className="text-teal-500">KOMPETEN</span>. Memulai belajar bahasa pemrograman secara otodidak selama 1 Tahun </p>
                    <div className="">
                        <button className="text-3xl text-gray-600">
                            <span className="flex justify-center gap-12">
                            <AiFillInstagram />
                            <AiFillLinkedin />
                            <AiOutlineWhatsApp />
                            </span>
                        </button>
                    </div>
                    <div className="py-2">
                        <button className="flex items-center w-fit bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer"> Resume
                            <span>
                            <AiOutlineDownload size={20} className="ml-2"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="md:ml-20">
                    <img src={mypic} alt="My Pict" className="img_p rounded-2xl bg-gradient-to-b from-black via-black to-gray-800" />
                </div>
            </div>
        </div>
    );
}

export default Home
