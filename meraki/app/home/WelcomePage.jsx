import Image from 'next/image'
import React from 'react'
import image from "../assets/images/welcome-image.png";
import StartMerakiButton from './components/StartMerakiButton'

export default function WelcomePage() {
  // text-5xl max-xl:text-4xl lg:max-w-lg'>
  return (
    <section id='about-us' className='flex justify-center items-center max-lg:flex-col gap-10 w-full max-container' >

      <div className='flex flex-1 flex-col py-7 xl:ml-36 lg:ml-16'>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair'> 
            <span className='italic'>meraki </span>
            <span className=''>son tarjetas </span>
            <br />
            <span className=''> con mensajes </span>
            <br />
            <span className=''>personalizados para </span>
            <br />
            <span className=''>que puedas </span>
            <span className='italic'>felicitar </span>
            <br />
            <span className=''>a tu estilo </span> 
          </h2>
          <p className=' flex text-lg max-xl:text-base mt-4 lg:max-w-lg info-text font-inter'>
          Infinitas tarjetas con fotos y vídeos creadas de forma
          compartida junto a tus amigos y familia.
          </p>
        </div>
          <StartMerakiButton marginTop='mt-10' />
        <div>

        </div>
      </div>

      <div className='flex-1 flex justify-center items-center max-lg:hidden pr-10'>
        <Image
          src={image}
          alt='product detail'
          width={500}
          height={480}
          className='object-contain w-auto'
        />
      </div>
    </section>
    
  )
}
