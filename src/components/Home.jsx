import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import mypic from "../assets/img/myPicture.png";
import React from "react";
import resume from "../assets/Resume.pdf";
import Typewriter from "typewriter-effect";
import BNSP from "../assets/BNSP.pdf";

const Home = () => {
  return (
    <div
      id="home"
      className="sm:h-screen h-full w-full bg-gradient-to-b from-gray-900  to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row select-none">
        <div className="flex flex-col justify-center h-full sm:mt-0 mt-28">
          <h2 className="text-3xl sm:text-5xl py-2 text-gray-50 font-medium">
            Hello Everyone,
          </h2>
          <h3 className="text-xl sm:text-2xl py-2 text-gray-300 font-medium">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("My Name Andhika Raffly Satria")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Junior Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Creative Coder")

                  .start();
              }}
            />
          </h3>
          <p className="text-md py-2 max-w-md text-gray-200">
            Memiliki ketertarikan dalam membuat website dan terus mengasah
            keterampilan dan skill hingga akhirnya mendapatkan sertifikat
            sebagai <span className="font-bold"><a href={BNSP}
              download="BNSP-Andhika"
              target="_blank"
              rel="noreferrer">Junior Web Developer</a></span> dari
            Badan Nasional Sertifikasi Profesi (BNSP)
          </p>
          <div className="">
            <button className="text-3xl text-gray-400">
              <span className="flex justify-center gap-12">
                <a href="https://github.com/satriia17">
                  <AiOutlineGithub />
                </a>
                <a href="https://www.linkedin.com/in/andhika-raffly-satria">
                  <AiFillLinkedin />
                </a>
                <a href="mailto:andhika.raffly06@gmail.com">
                  <AiOutlineMail />
                </a>
              </span>
            </button>
          </div>
          <div className="py-2">
            <a
              href={resume}
              download="CV-Andhika"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center w-fit bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Resume
                <span>
                  <a
                    href={resume}
                    download="CV-Andhika"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineDownload size={20} className="ml-2" />
                  </a>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="md:ml-20 md:mb-0 mb-10 md:mt-0 mt-10">
          <img
            src={mypic}
            alt="My Pict"
            className="img_p rounded-2xl bg-gradient-to-b from-gray-950 to-gray-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
