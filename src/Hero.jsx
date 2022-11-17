import React from 'react'
import './App.css'

const Hero = () => {
  return (
    <div className='hero mx-auto container mt-2 mb-2'>
        <h2 className='text-4xl lg:max-w-[500px] md:max-w-full '>Helping companies build better, scalable software.</h2>
        <p className='text-gray-400 lg:max-w-[500px] md:max-w-full mt-2'>Award-winning web developer and author, with over 15+ years of working expereince with fortune 500 companies
            like Apple,Google,Facebook,and more. 
        </p>
    </div>
  )
}

export default Hero