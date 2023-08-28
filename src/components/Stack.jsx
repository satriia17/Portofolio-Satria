import React from 'react'
import react from '../assets/img/react.png'
import css from '../assets/img/css.png'
import git from '../assets/img/Git.png'
import html from '../assets/img/html-pict.svg'
import js from '../assets/img/js.png'
import tailwind from '../assets/img/tailwind.png'

const Stack = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: js,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: react,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      {
        id: 8,
        src: git,
        title: "Git",
        style: "shadow-red-700",
      },
    ];

  return (
    <div id='stack' className='sm:h-screen h-full w-full bg-gradient-to-b from-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full text-white md:flex-col">
        <div className='pb-2 text-center'>
          <p className='text-4xl text-teal-600 font-bold inline border-b-4 border-teal-300'>
            Tech Stack
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mb-10 sm:mb-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack