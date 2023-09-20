import React from 'react'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className='w-full bg-purple-500 text-gray-300 px-4'>
      <div className='max-w-screen-xl mx-auto'>
      <Banner/>
      <hr />
      <About/>
      <hr />
      <Experience/>
      <hr />
      <Skills/>
      <hr />
      <Projects/>
      <hr />
      <Footer/>
      <hr />
      </div>
    </main>
  )
}

export default page