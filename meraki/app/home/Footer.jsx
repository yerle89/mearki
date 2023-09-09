import React from 'react'
import icon from "../assets/images/instagram-icon.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id='footer' className='bg-[#2B2B2B] border border-[#2B2B2B] border-t-white sm:px-16 px-8 sm:py-10 py-6 pb-10'>
      <section className='max-container'>
        <div className='flex items-start lg:items-center justify-start gap-5 lg:gap-14 max-lg:flex-col xl:ml-36 lg:ml-16'>
          <div className='flex flex-col items-start'>
            <Link href='#footer'>
              <Image
                src={icon}
                alt='instagram'
                width='auto'
                height='auto'
                className='m-0'
              />
            </Link>
          </div>
          <div className='flex justify-start items-start lg:items-center gap-1 lg:gap-4 flex-wrap max-lg:flex-col'>
            <Link href='#footer'>
              <h4 className='font-inter text-sm text-white'>
                Sobre Nosotros
              </h4>
            </Link>
            <Link href='#footer'>
              <h4 className='font-inter text-sm text-white'>
                Soporte
              </h4>
            </Link>
            <Link href='#footer'>
              <h4 className='font-inter text-sm text-white'>
                Contacto
              </h4>
            </Link>
          </div>

          <div className='flex justify-start items-start lg:items-center gap-1 lg:gap-4 flex-wrap max-lg:flex-col'>
          <Link href='#footer'>
              <h4 className='font-inter text-sm text-white'>
                Terminos y Condiciones
              </h4>
            </Link>
            <Link href='#footer'>
              <h4 className='font-inter text-sm text-white'>
                Politicva de Privacidad
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}
