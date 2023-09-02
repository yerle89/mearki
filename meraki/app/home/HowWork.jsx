
import Image from 'next/image'
import React from 'react'
import image1 from '../assets/images/how-work-image-1.png'
import image2 from '../assets/images/how-work-image-2.png'
import image3 from '../assets/images/how-work-image-3.png'

export default function HowWork() {
  return (
    <section className='max-container max-sm:mt-10'>
      <div className='flex flex-col justify-start gap-5 xl:ml-36 lg:ml-16'>
        <h2 className='text-4xl font-playfair'>
          How does meraki work?
        </h2>
        <p className='lg:max-w-lg mt-2 font-inter text-slate-gray'>
          Infinitas tarjetas con fotos y vídeos creadas de forma
          compartida junto a tus amigos y familia.
        </p>
      </div>

      <div className='justify-start mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-10 md:gap-16 lg:gap-10 sm:px-1 md:px-6 lg:px-20 xl:px-38'>
        <div className='flex flex-1 flex-col w-full max-sm:w-full sm:items-center'>
          <Image src={image1} alt='image1' className='w-[180px] h-[180px] max-md:hidden' />
          <h3 className='mt-4 text-base leading-normal font-inter font-bold'>
            Crea un 
            <span className='italic'> meraki</span>
          </h3>
          <p className='mt-4 font-inter text-base leading-normal w-64 sm:text-center'>
            Crea un mensaje grupal para su
            compañero y agrega mensajes,
            GIFs o videos.
          </p>
        </div>

        <div className='flex flex-1 flex-col w-full max-sm:w-full sm:items-center'>
          <Image src={image2} alt='image1' className='w-[180px] h-[180px] max-md:hidden' />
          <h3 className='mt-4 text-base leading-normal font-inter font-bold'>
            Invita a sus amigos
          </h3>
          <p className='mt-4 font-inter text-base leading-normal w-64 sm:text-center'>
            Invita a otros participantes para que
            contribuyan con la terjeta y ver como
            crece.
          </p>
        </div>

        <div className='flex flex-1 flex-col w-full max-sm:w-full sm:items-center'>
          <Image src={image3} alt='image1' className='w-[180px] h-[180px] max-md:hidden' />
          <h3 className='mt-4 text-base leading-normal font-inter font-bold'>
            Envia tu 
            <span className='italic'> meraki</span>
          </h3>
          <p className='mt-4 font-inter text-base leading-normal w-64 sm:text-center'>
            Crea un mensaje grupal para su
            compañero y agrega mensajes,
            GIFs o videos.
          </p>
        </div>
      </div>
    </section>
  )
}
