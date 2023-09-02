import Link from 'next/link'
import Image from 'next/image'
import logo from "../../assets/images/meraki.svg";


export default function NavigationBar() {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 border-b border-solid border-white'>
      <nav className='flex justify-between items-center w-[95%] md:w-[95%] lg:w-[85%] mx-auto h-12'>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <Image className='w-32 md:w-32 cursor-pointer' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-blue-600 duration-300 cursor-pointer' href='/'>
            ES/EN
          </Link>
          <Link href='/login' className='xl:inline-flex bg-[#2B2B2B] text-white px-5 py-2 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black '>Login</Link>
        </div>
      </nav>
    </div>
  )
}
