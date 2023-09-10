'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import logo from "../../assets/images/meraki.svg";
import { TfiAlignJustify, TfiClose } from 'react-icons/tfi';
import { signOut, useSession } from 'next-auth/react';


const links = [{
  label: 'About Us',
  route: '/#about-us'
}, {
  label: 'Meraki Examples',
  route: '/#examples'
}, {
  label: 'Plans',
  route: '/#plans'
}, {
  label: 'Contact',
  route: '/#contact'
}]

export default function NavigationBar() {

  const session = useSession();
  const [menuOpen,setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='sticky top-0 w-full left-0 flex items-center justify-between p-4 border-b border-solid border-white bg-white'>
      <nav className='flex justify-between items-center w-[90%] max-container h-12'>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <Image className='w-32 md:w-32 cursor-pointer ' src={logo} alt='logo' width='auto' height='auto' />
          </Link>
        </div>
        <div className='md:static absolute md:min-h-fit min-h-[60vh] left-[-100%] top[-100%] sm:top-0 md:w-auto w-full flex items-center px-5'>
          <ul className='hidden xl:inline-flex items-center lg:text-base md:text-sm gap-8 uppercase'> 
            {links.map(({ label, route }) => (
              (false ) ? (<> </>)
              : (<li onClick={() => setMenuOpen(false)} key={route} className='items-center text-center'>
                <Link className='hover:text-blue-600 duration-300 cursor-pointer' href={route}>
                  {label}
                </Link>
              </li>)
            ))}
            {(!session?.data ) ? (<> </>)
              : (<li onClick={() => setMenuOpen(false)} key='/dashboard'>
                <Link className='hover:text-blue-600 duration-300 cursor-pointer' href='/dashboard'>
                  Dashboard
                </Link>
              </li>)}
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-blue-600 duration-300 cursor-pointer' href='/'>
            ES/EN
          </Link>
          {(!session?.data ) ? (<>
          <Link href='/signin' className='hidden xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black'>
            <span className='text-center w-full'>REGISTRARSE</span>
          </Link>
          <Link href='/login' className='hidden xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black '>
            <span className='text-center w-full'>INICIAR SESION</span>
          </Link> </>)
          : (
            <button
              className='hidden xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black'
              onClick={() => signOut()}>
                CERRAR SESION
            </button>
          )}
          {/* Mobile Menu */ }
          <div className='xl:hidden'>
            <TfiAlignJustify onClick={toggleMenu} className=' inline-flex xl:hidden text-2xl cursor-pointer'/>
          </div>
        </div>
        <div className={menuOpen ? 
          'fixed top-20 left-60 w-full xl:hidden h-screen p-10 ease-in-out duration-300' : 
          'fixed left-[-100%] h-screen top-20 p-10 ease-in-out duration-300'}
          onClick={toggleMenu}
          >
            </div>
          <div className={menuOpen ? 'fixed top-20 left-0 w-60 xl:hidden h-screen bg-white p-10 ease-in-out duration-300' : 'fixed left-[-100%] h-screen top-20 p-10 ease-in-out duration-300'}>
            <div className='flex w-full items-center justify-end'>
              <div className='cursor-pointer'>
                <TfiClose onClick={toggleMenu} className='text-xl'/>
              </div>
            </div>
            <div className='flex-col py-4'>
              <ul className='items-center uppercase'> 
                {links.map(({ label, route }) => (
                  <li className='py-2 hover:underline hover:decoration-black cursor-pointer w-fit' key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
                {(!session?.data ) ? (<> </>)
                  : (<li key='/dashboard' className='py-2 hover:underline hover:decoration-black cursor-pointer w-fit'>
                    <Link className='hover:text-blue-600 duration-300 cursor-pointer' href='/dashboard'>
                      Dashboard
                    </Link>
                  </li>)}
                {(!session?.data ) ? (<>
                <li className='py-2 w-40'>
                  <Link href='/signin' className='flex xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black'>
                    <span className='text-center w-full'>REGISTRARSE</span>
                  </Link>
                </li>
                <li className='py-2 w-40'>
                  <Link href='/login' className='flex xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black'>
                    <span className='text-center w-full'>INICIAR SESION</span>
                  </Link>
                </li></>)
                : (
                  <li className='py-2 w-40'>
                    <button
                      className='flex xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 w-40 h-10 rounded-full duration-100 sm:hover:bg-[#8b8b8b] sm:hover:text-black active:bg-[#8b8b8b] active:text-black'
                      onClick={() => signOut()}>
                        CERRAR SESION
                    </button>
                  </li>
                )}
              </ul>
              
            </div>
        </div>
        
      </nav>
    </header>
  )
}
