
import React from "react";

import FreePlanCard from './components/FreePlanCard'
import VipPlanCard from './components/VipPlanCard'
import PremiunPlanCard from './components/PremiunPlanCard'
import FreePlanButton from "./components/FreePlanButton";
import PremiunPlanButton from "./components/PremiunPlanButton";
import VipPlanButton from "./components/VipPlanButton";



export default function Plans() {

  return (
    <section id='plans' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5 xl:ml-36 lg:ml-16'>
        <h2 className='font-playfair text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl '>
          Escoge
          <span className='italic'> el plan </span>
          que mejor
          <br />
          se ajuste a tu evento
        </h2>
      </div>
      <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14 xl:ml-36 lg:ml-16 lg:mr-16 md:mr-6 sm:mr-0 max-lg:hidden'>
        <FreePlanCard />
        <PremiunPlanCard />
        <VipPlanCard />
      </div>
      <div className='mt-10 flex flex-col gap-2 items-center lg:hidden'>
        <FreePlanButton />
        <PremiunPlanButton />
        <VipPlanButton />
      </div>
    </section>
  )
}
