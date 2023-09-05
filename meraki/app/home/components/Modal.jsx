import React from 'react'

export default function Modal({ isVisible, onClose }) {
  if( !isVisible ) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper' ) onClose();
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25
    backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
      <div className='w-60 md:w-[450px] h-40 md:h-32 gap-5 flex flex-col bg-gray-500 items-center border border-black rounded-2xl'>
        <div className=' p-2 text-center font-playfair text-lg md:text-xl text-white'>
          MENSAJE ENVIADO CORRECTAMENTE
        </div>
        <button
          className='bg-[#2B2B2B] text-white w-28 h-10 rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black text-sm' onClick={() => onClose()}>
            CERRAR
        </button>
      </div>
    </div>
  )
}
