import React from 'react'
import StartMerakiButton from './components/StartMerakiButton'
import Image from 'next/image'
import ExamplesButton from './components/ExamplesButton'

export default function MerakiExamples() {
  return (
    <section
      id='examples'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container max-sm:mt-10'
    >
      <div className='flex flex-1 flex-col xl:ml-36 lg:ml-16'>
        <h2 className='font-playfair text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl lg:max-w-lg text-[#F9F8F5]'>
        <span className='italic'>Inspírate </span>
          y comienza
          <br/>
          un 
          <span className='italic'> meraki </span>
          desde uno
          <br/>
          de nuestros <span className='italic'> estilos</span>
        </h2>
        <p className='mt-6 sm:mt-14 text-base lg:max-w-lg text-[#F9F8F5]'>
        O empieza a crear desde cero.
        </p>
        <div>
          <StartMerakiButton borderColor='border-white' marginTop='mt-4' />
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-center items-center mt-2 gap-4'>
      <ExamplesButton label='Cumpleaños' backgroundColor='bg-[#FFF385]'/>
      <ExamplesButton label='Boda' backgroundColor='bg-[#FFBDC6]'/>
      <ExamplesButton label='Navideño' backgroundColor='bg-[#A3DBE8]'/>
      <ExamplesButton label='Nacimiento' backgroundColor='bg-[#9795FF]'/>
      </div>
    </section>
  )
}
