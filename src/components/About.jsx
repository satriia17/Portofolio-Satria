import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="sm:h-screen w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-col">
        <div className="flex flex-col justify-center h-full sm:mt-0 mt-28 md:mx-20">
          <div className="pb-2 text-center">
            <p className="text-4xl text-teal-600 font-bold inline border-b-4 border-teal-300">
              About
            </p>
          </div>

          <p className="mt-10 text-lg mb-10 md:mb-0">
            Saya seorang lulusan yang memiliki ketertarikan di bidang
            pemrograman. Saya terbiasa menggunakan bahasa pemrograman JavaScript
            karena menurut saya itu merupakan bahasa pemrograman yang cukup
            mudah dipahami dan baru-baru ini saya mulai menggunakan library
            react untuk membuat website dengan sederhana. Dalam beberapa bulan
            terakhir saya mengikuti sertifikasi untuk menjadi Junior Web
            Developer yang diadakan oleh KOMINFO melalui website Digital Talent
            Scholarship (Digitalent) dan mendapatkan hasil KOMPETEN. Selain itu
            saya juga mengikuti pembelajaran mandiri dari Youtube untuk mengasah
            skill yang saya miliki.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
