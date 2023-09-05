import React from 'react'

export default function StartMerakiButton({ borderColor, marginTop }) {
  return (
    <button
      className={`border-white border w-40 h-10 bg-[#2B2B2B] text-white rounded-full duration-300 hover:bg-[#8b8b8b] hover:text-black text-sm
      ${ 
        borderColor
        ? `${borderColor}`
        : "border-none"
      }
      ${`${marginTop}`}`}
    >
      EMPEZAR UN MERAKI
    </button>
  );
};
