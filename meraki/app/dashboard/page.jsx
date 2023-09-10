'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import image1 from "../assets/images/felicidades-images.png";
import image2 from "../assets/images/felicidades-ingles-images.png";
import image3 from "../assets/images/felicidades-ingles-second-images.png";
import image4 from "../assets/images/feliz-navidad-image.png";
import Image from 'next/image';

export default function page() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  return (
    <section className=''>
      <div className='flex flex-col py-7 items-center max-container'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h2 className='text-4xl font-playfair'>
            TUS MERAKIS
          </h2>
        </div>
        <div className='mt-16 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          <div className='flex flex-1 flex-col items-center w-full max-sm:w-full'>
            <Image src={image1} alt='image' className='w-[282px] h-[282px] shadow-2xl shadow-black' />
            <div className='mt-8 flex justify-start gap-2.5'>
              <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                Para: Martin
              </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
              {'VER'}
            </h3>
          </div>
          <div className='flex flex-1 flex-col items-center w-full max-sm:w-full'>
            <Image src={image2} alt='image' className='w-[282px] h-[282px] shadow-2xl shadow-black' />
            <div className='mt-8 flex justify-start gap-2.5'>
              <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                Para: Fabian
              </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
              {'VER'}
            </h3>
          </div>
          <div className='flex flex-1 flex-col items-center w-full max-sm:w-full'>
            <Image src={image3} alt='image' className='w-[282px] h-[282px] shadow-2xl shadow-black' />
            <div className='mt-8 flex justify-start gap-2.5'>
              <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                Para Felix
              </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
              {'VER'}
            </h3>
          </div>
          <div className='flex flex-1 flex-col items-center w-full max-sm:w-full'>
            <Image src={image4} alt='image' className='w-[282px] h-[282px] shadow-2xl shadow-black' />
            <div className='mt-8 flex justify-start gap-2.5'>
              <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                Para: Paco
              </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
              {'VER'}
            </h3>
          </div>
        </div>
        <div className='py-10'>
          <button
            className='items-center bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black'
            onClick={() => signOut()}>
              <span className='text-center w-full text-sm'>CERRAR SESION</span>
          </button>
        </div>
      </div>
    </section>
  )
}

page.requireAuth = true