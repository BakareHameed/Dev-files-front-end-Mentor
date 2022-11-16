import React from 'react'
import Walmart from './img/Logos/Walmart.svg'
import Morgan from './img/Logos/JP Morgan.svg'
import Visa from './img/Logos/Visa.svg'
import Tinder from './img/Logos/Tinder.svg'
import Samsung from './img/Logos/Samsung.svg'
import Verizon from './img/Logos/Verizon.svg'

const Logos = () => {
  return (
    <div className='gap-4 mt-10 mb-2 lg:flex items-center justify-center lg:w-full w-[300px] inline-block'>
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