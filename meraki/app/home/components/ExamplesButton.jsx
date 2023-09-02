import Image from 'next/image'
import React from 'react'
import icon from '../../assets/images/arrow.png'
export default function ExamplesButton({ label, backgroundColor }) {
  return (
    <button 
      className={`flex items-center gap-2 justify-between
      px-5 py-2 border text-lg
      rounded-full border-none
      lg:w-48 md:w-72 w-72

      ${ 
        backgroundColor
        ? `${backgroundColor}`
        : "bg-white"
      }
      `}>
      {label}

      <Image
          src={icon}
          alt='arrow right icon'
          className='ml-1 w-7'
        />

    </button>
  )
}
