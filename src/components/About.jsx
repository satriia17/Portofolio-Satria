import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="sm:h-screen w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-col select-none">
        <div className="flex flex-col justify-center h-full sm:mt-0 mt-28 md:mx-20">
          <div data-aos="fade-down" data-aos-duration="500" className="pb-2 text-center">
            <p className="text-4xl text-gray-50 font-bold inline border-b-4 border-gray-200">
              About
            </p>
          </div>

          <p data-aos="fade-up" data-aos-duration="500" className="mt-10 text-lg mb-10 md:mb-0 p-2">
            Saya merupakan Junior Web Developer yang sudah tersertifikasi oleh
            Badan Sertifikasi Nasional (BNSP). Saya terbiasa dalam menggunakan
            bahasa pemrograman Javascript dan pemula dalam bahasa PHP, Selain
            itu saya juga memiliki pengalaman dengan menggunakan ReactJs. Selama
            1 tahun terakhir saya selalu mengikuti pembelajaran mandiri dari
            Youtube untuk mengasah skill yang saya miliki.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
