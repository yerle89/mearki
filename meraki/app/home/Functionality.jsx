import React from 'react'

export default function Functionality() {
  return (
    <section className='max-container'>
      <div className='flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 xl:ml-36 lg:ml-16'>
        <div className='flex flex-col'>
          <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-playfair md:leading-snug lg:leading-snug xl:leading-snug'>
            Texto sobre la
            <br />
            funcionalidad de
            <br />
            la web
          </h2>
          <p className=' flex text-lg max-xl:text-base mt-8 lg:max-w-lg info-text font-inter'>
            Otro texto explicativo
          </p>
        </div>
          
        <div className='flex flex-col'>
        <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-playfair md:leading-snug lg:leading-snug xl:leading-snug'>
            Texto sobre la
            <br />
            funcionalidad de
            <br />
            la web
          </h2>
          <p className=' flex text-lg max-xl:text-base mt-8 lg:max-w-lg info-text font-inter'>
            Otro texto explicativo
          </p>
        </div>

      </div>
    </section>
  )
}
