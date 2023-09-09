import Image from 'next/image'
import React from 'react'
import icon from '../../assets/images/VipPlanIcon.png'
import checkImage from '../../assets/images/checkSolid.png'

export default function VipPlanCard({ backgroundColor}) {
  return (
    <div className='flex flex-col justify-start items-center border border-black shadow-gray-400 bg-[#FFF385] shadow-lg rounded-xl gap-6 py-8'>
      <div className=''>
      <Image src={icon} alt='happy face' width={60} height={60} />
      </div>

        <h3 className='font-playfair text-4xl text-center'>
          VIP
          <br/>
          19,99€
        </h3>

        <div className='flex flex-col justify-start items-start'>
          <p className='-mt-1 xl:text-base text-sm mb-10'>
            Tarjetas ilimitadas para
            <br />
            celebracions a gran escala.
            <br />
          </p>
          <div className='flex justify-between items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width='auto' height='auto' />
            <p className='text-sm xl:text-base'>
              Tarjetas ilimitadas
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width='auto' height='auto' />
            <p className='text-sm xl:text-base'>
              Sube tu propio fondo
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width='auto' height='auto' />
            <p className='text-sm xl:text-base'>
              Cambia de plan en cualquier <br/> momento
            </p>
          </div>
      </div>

      <button
      className='bg-[#2B2B2B] text-white w-28 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black text-sm'>
        EMPEZAR
    </button>
    </div>
  )
}
