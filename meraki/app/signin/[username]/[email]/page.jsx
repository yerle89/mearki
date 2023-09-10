"use client"
import Image from 'next/image';
import React from 'react'
import image from "../../../assets/images/register-image.png";

export default function page() {

  return (
    <main className='max-container'>
      <section className=' mt-10 md:mx-28 flex justify-center max-lg:flex-col md:border md:shadow-2xl md:shadow-black'>
        <div className='flex flex-col items-end w-full max-lg:hidden'>
          <Image
            src={image}
            alt='image'
            width={700}
            height={700}
            className=' h-full'
          />
        </div>
        <div className='flex flex-col w-full items-center py-5 lg:pt-10 xl:pt-20'>
          <div className=''>
            <h2 className='text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-playfair text-center'> 
              CONFIRMA TU EMAIL
            </h2>
            <h1>
            </h1>
          </div>
          <div>
          </div>
        </div>
      </section>
    </main>
  )
}
