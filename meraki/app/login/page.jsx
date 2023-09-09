"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import image from "../assets/images/login-image.png";

export default function page() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  const checkFormValidity = () => {
    if (user.trim() !== '' && password.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormValidity();
    if (formValid) {
      setUser('');
      setPassword('');

    }
  };

  return (
    <main className='max-container'>
      <section className='h-auto mt-10 md:mx-28 flex justify-center max-lg:flex-col md:border md:shadow-2xl md:shadow-black'>
        <div className='flex flex-col items-end w-full max-lg:hidden'>
          <Image
            src={image}
            alt='image'
            width={700}
            height={700}
            className='object-contain'
          />
        </div>
        <div className='flex flex-col w-full items-center py-5 lg:pt-10 xl:pt-20'>
          <div className=''>
            <h2 className='text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-playfair text-center'> 
              Inicia sesión
            </h2>
            <form  className="flex flex-col gap-5 pt-10 items-center" onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <input
                  id='user'
                  className="border border-[#2B2B2B] rounded-full
                  h-10 w-full sm:h-14 sm:w-64 text-sm sm:text-base
                  px-3 placeholder:text-[#2B2B2B] placeholder:text-opacity-70"
                  type="text"
                  placeholder="Usuario"
                  required
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="flex gap-8">
                <input
                  id='password'
                  className="border border-[#2B2B2B] rounded-full
                  h-10 w-full sm:h-14 sm:w-64 text-sm sm:text-base
                  px-3 placeholder:text-[#2B2B2B] placeholder:text-opacity-70"
                  type="password"
                  placeholder="Contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-8">
                <Link href='/login' className='text-sm md:text-lg info-text font-inter text-center'>
                  He olvidado mi contraseña
                </Link>
              </div>
              <div className='flex justify-center mt-5'>
                <button className="border-white border w-40 h-10 bg-[#2B2B2B] text-white rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black
                  text-sm" 
                  type="submit">
                  INICIAR SESIóN
                </button>
              </div>
            </form>
          </div>
          <div>

          </div>
        </div>
      </section>
    </main>
  )
}
