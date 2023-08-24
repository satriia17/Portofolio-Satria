import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import mypic from "../img/myPicture.png";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./components/Home";

function App() {
  return (
    <>
    <div>
      <main className="">
        <section className="">
          <NavBar />
          {/* <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-4xl font-signature">ARS</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav> */}
          <Home />
          {/* <div className="text-center pt-40">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Andhika Raffly Satria
            </h2>
            <h3 className="text-2xl py-2">Junior Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 ">
              Memiliki pengalaman mengikuti sertifikasi VSGA dari BPPTIK dan
              mendapatkan hasil <span className="text-teal-500">KOMPETEN</span>.
              Memulai belajar bahasa pemrograman secara otodidak selama 1 Tahun
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
          <div className="flex justify-center mt-10">
            <img src={mypic} className="img_p rounded-full bg-gray-800" />
          </div> */}
        </section>

        {/* <section>
          <div>
            <h3 className="text-3xl py-1">MY Experiences</h3>
            <p className="text-md py-2 leading-8 text-gray-800"></p>
          </div>
          <div>
            <div>
              <img  />
            </div>
          </div>
        </section> */}
      </main>
    </div>
    </>
  );
}

export default App;
