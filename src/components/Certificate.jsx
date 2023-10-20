import React from "react";
import p2m from "../assets/img/Sertifikat/CP2M.png";
import ppu from "../assets/img/Sertifikat/CPPU.png";
import prakerja from "../assets/img/Sertifikat/CPrakerja.png";
import vsga from "../assets/img/Sertifikat/CVSGA.png";


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
      className="bg-gradient-to-b from-gray-800 to-gray-900 w-full text-gray-50"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center pt-28 select-none">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">
            Certificate
          </p>
          <p className="py-6 font-medium">Sertifikat Terakhir yang Saya Dapatkan</p>
        </div>

        <div className="flex flex-wrap gap-8 px-12 sm:px-0 justify-center">
          {certif.map(({ id, src }) => (
            <div data-aos="zoom-in" data-aos-duration="600" key={id} className="shadow-md w-96 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
};
    

export default Certificate;
