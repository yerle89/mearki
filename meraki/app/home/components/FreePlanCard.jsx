import Image from 'next/image'
import React from 'react'
import icon from '../../assets/images/FreePlanIcon.png'
import checkImage from '../../assets/images/checkSolid.png'

export default function FreePlanCard({ backgroundColor}) {
  return (
    <div className='flex flex-col justify-start items-center border border-black shadow-gray-400 shadow-lg rounded-xl gap-6 py-8'>
      <div className=''>
      <Image src={icon} alt='happy face' width={60} height={60} />
      </div>

        <h3 className='font-playfair text-4xl'>
          Gratuito
        </h3>

        <div className='flex flex-col justify-start items-start'>
          <p className='mt-3 xl:text-base text-sm mb-10'>
            Perfecto para crear un Meraki de
            <br />
            1 a 10 tarjetas entre tus amigos
            <br />
            y familiares.
          </p>
          <div className='flex justify-between items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              De 1 a 10 terjetas
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              Añade textos y fotografías
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              Cambia de plan en cualquier <br/> momento
            </p>
          </div>
      </div>

      <button
        className='border-black border w-28 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black text-sm'>
          EMPEZAR
      </button>
    </div>
  )
}
