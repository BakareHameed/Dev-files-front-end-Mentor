import React from 'react'
import Walmart from './img/Logos/Walmart.svg'
import Morgan from './img/Logos/JP Morgan.svg'
import Visa from './img/Logos/Visa.svg'
import Tinder from './img/Logos/Tinder.svg'
import Samsung from './img/Logos/Samsung.svg'
import Verizon from './img/Logos/Verizon.svg'
import './App.css'

const Logos = () => {
  return (
    <div className='lg:gap-8 mt-10 mb-2 lg:flex items-center justify-center lg:w-full grid md:flex md:gap-2 logos'>
        <img src={Walmart} alt="walmart" />
        <img src={Morgan} alt="Morgan" />
        <img src={Visa} alt="Visa" />
        <img src={Tinder} alt="Tinder" />
        <img src={Samsung} alt="Samsung" />
        <img src={Verizon} alt="Verizon" />
    </div>
  )
}

export default Logos