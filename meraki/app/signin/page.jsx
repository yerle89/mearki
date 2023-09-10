"use client"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import image from "../assets/images/register-image.png";

export default function page() {

  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [email, setEmail] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  // const [passwordFormValid, setPasswordFormValid] = useState(false);
  // const [termsAndConditionsFormValid, setTermsAndConditionsFormValidFormValid] = useState(false);

  const checkPasswordFormValidity = () => {
    return password.trim() === passwordAgain.trim() ? true : false;
  };

  const checkTermsAndConditionsFormValidity = () => {
    return termsAndConditions ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordFormValid = checkPasswordFormValidity();
    const termsAndConditionsFormValid = checkTermsAndConditionsFormValidity();
    if (passwordFormValid === true && termsAndConditionsFormValid === true) {
      setUser('');
      setEmail('');
      setPassword('');
      setPasswordAgain('');
      setTermsAndConditions(false);
      createUserWithEmailAndPassword(auth, email, password);
      // router.push(`/signin/${user}/${email}`);
      
    }
  };

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
              Regístrate
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
                  id='email'
                  className="border border-[#2B2B2B] rounded-full
                  h-10 w-full sm:h-14 sm:w-64 text-sm sm:text-base
                  px-3 placeholder:text-[#2B2B2B] placeholder:text-opacity-70"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <input
                  id='passwordAgain'
                  className="border border-[#2B2B2B] rounded-full
                  h-10 w-full sm:h-14 sm:w-64 text-sm sm:text-base
                  px-3 placeholder:text-[#2B2B2B] placeholder:text-opacity-70"
                  type="password"
                  placeholder="Repite contraseña"
                  required
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                />
              </div>
              <div className="flex gap-8 mt-3">
                <label className='flex gap-3'>
                  <input
                      id="termsAndConditions"
                      type="checkbox"
                      checked={termsAndConditions}
                      onChange={(e) => setTermsAndConditions(!termsAndConditions)}
                    />
                    Acepto terminos y condiciones.
                </label>
              </div>
              <div className='flex justify-center mt-5'>
                <button className="disabled:opacity-40 border-white border w-40 h-10 bg-[#2B2B2B] text-white rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black
                  text-sm" 
                  // disabled={(!user || !email || !password || !passwordAgain) || (password !== passwordAgain)}
                  type="submit">
                  REGISTRARSE
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
