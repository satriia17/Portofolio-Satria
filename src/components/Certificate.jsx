import React from "react";
import p2m from "../assets/img/Sertifikat/CP2M.png";
import ppu from "../assets/img/Sertifikat/CPPU.png";
import prakerja from "../assets/img/Sertifikat/CPrakerja.png";
import vsga from "../assets/img/Sertifikat/CVSGA.png";
import { Card } from "flowbite-react";

const Certificate = () => {
  const certif = [
    {
      id: 1,
      src: prakerja,
    },
    {
      id: 2,
      src: vsga,
    },
    {
      id: 3,
      src: ppu,
    },
    {
      id: 4,
      src: p2m,
    },
  ];

  return (
    <div
      id="certificate"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center pt-28">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificate
          </p>
          <p className="py-6 font-medium">Sertifikat Terakhir yang Saya Dapatkan</p>
        </div>

        <div className="flex flex-wrap gap-8 px-12 sm:px-0 justify-center">
          {certif.map(({ id, src }) => (
            <div key={id} className="shadow-md w-96 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
};

{/* <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> 
  
  <div id='certificate' className="md:h-screen w-full h-full bg-gradient-to-b from-gray-800 to-black">
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-col'>
        <div className='pb-2 text-center'>
          <p className='text-4xl text-teal-600 font-bold inline border-b-4 border-teal-300'>Certificates</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 mb-10 sm:mb-0'>
          {certif.map(({id, src}) => (
            <div key={id} className=''>
              <img src={src} alt="" className="h-auto w-64 sm:w-72 rounded-lg mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div> 
  */}

    

export default Certificate;
