"use client"
import React, {useState} from "react";
import Image from 'next/image'
import star from '../../assets/images/PremiunPlanIcon.png'
import arrowDown from '../../assets/images/arrowDown.png'
import checkImage from '../../assets/images/checkSolid.png'


export default function PremiunPlanButton() {

  const plan = {
    type: "Premiun",
    active: 1
  };

  const [data, setData] = useState(plan);
  const handleToggleActive = () => {
      let activeNew = data.active === 1 ? 0 : 1;
      setData({...data, active : activeNew});
  }

  return (
    <div className={`w-full md:w-96 px-5 py-2 border border-black rounded-3xl duration-500 bg-[#FFBDC6] group ${data.active === 1 ? 'is-active' : ''}`}>
      <div className="flex items-center justify-between">
        <Image src={star} alt='happy face' width={30} height={30} />
        <div className="text-center w-full group-[.is-active]:font-bold">
        {data.type} 
        </div>
        <Image src={arrowDown} className="cursor-pointer duration-500 group-[.is-active]:rotate-180" alt='Arrow Down' width={30} height={30} onClick={handleToggleActive}/>
      </div>
      <div className="overflow-hidden duration-100 max-h-0 group-[.is-active]:max-h-full items-center flex flex-col">
        <div className='mt-2 flex flex-col justify-start items-start'>
          <h3 className='font-playfair text-4xl text-center w-full'>
            5,99€
          </h3>
          <p className='mt-3 xl:text-base text-sm mb-10'>
            Tarjetas personalizadas para
            <br />
            grupos grandes.
            <br />
          </p>
          <div className='flex justify-between items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              Hasta 100 tarjetas
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              Añade vídeos y Gifs
            </p>
          </div>
          <div className='flex justify-start items-start'>
            <Image className='xl:mr-8 mr-2' src={checkImage} alt='check' width={24} height={24} />
            <p className='text-sm xl:text-base'>
              Cambia de plan en cualquier <br/> momento
            </p>
          </div>
      </div>

      <button
      className='mt-5 mb-3 bg-[#2B2B2B] text-white w-28 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black text-sm'>
        EMPEZAR
    </button>

      </div>
    </div>
  )
}
