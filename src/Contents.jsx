import React from 'react'
import Spense from './img/Spense.png'
import Yelp from './img/YelpCamp.png'

const Contents = () => {
  return (
    <div className='mt-20 text-white lg:flex lg:justify-around lg:flex  md:mx-auto'>
      <div className='mb-10 '>
        <img src={Spense} alt="Spense" className='' />
        <h1 className='text-4xl p-5'>Spense.com</h1>
        <p className='text-gray-400 md:max-w-[550px]'>Rethinking the way writers get paid, an open-source platform designed to help writers focus 
          more on writing, and less on how they'll get paid. Project in collaboration with Codewell.cc
        </p>
      </div>
      <div>
        <img src={Yelp} alt="YelpCamp" />
        <h1 className='text-4xl p-5'>YelpCamp.com</h1>
        <p className='text-gray-400 md:max-w-[550px]'>Allowing backpack travelers to specify their trip through an open-source platform similiar to TripAdvisor. With over
          1m MAU, YelpCamp has been the crowd's favorite in 2021
        </p>
      </div>
    </div>
  )
}

export default Contents