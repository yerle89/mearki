import WelcomePage from './home/WelcomePage'
import HowWork from './home/HowWork'
import MerakiExamples from './home/MerakiExamples'
import Plans from './home/Plans'
import Functionality from './home/Functionality'
import Footer from './home/Footer'
import Contact from './home/Contact'

export default function HomePage () {
  return (
    <main className="">
      <section className='bg-[#FFF385] sm:px-16 px-8 '>
        <WelcomePage />
      </section>
      <section className='bg-[#FFBDC6] sm:px-16 px-8 sm:py-16 py-6 '>
        <HowWork />
      </section>
      <section className='bg-[#2B2B2B] sm:px-16 px-8 sm:py-16 py-6 '>
        <MerakiExamples />
      </section>
      <section className='bg-white sm:px-16 px-8 sm:py-16 py-6 '>
        <Plans />
      </section>
      <section className='bg-[#9795FF] sm:px-16 px-8 sm:py-16 py-6 '>
        <Functionality />
      </section>
      <section className='bg-[#2B2B2B] sm:px-16 px-8 sm:py-16 py-6 '>
        <Contact />
      </section>
    </main>
  )
}