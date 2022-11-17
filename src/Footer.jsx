import React from 'react'
import github from './img/Social Icons/Github.svg'
import LinkedIn from './img/Social Icons/LinkedIn.svg'
import Twitter from './img/Social Icons/Twitter.svg'

const Footer = () => {
  return (
    <div className='text-white mt-5 flex justify-between p-3 footer'>
        <h2>Jonathan Specter</h2>
        <div className='flex gap-3'>
            <img src={Twitter} alt="Twitter" />
            <img src={LinkedIn} alt="Linkedin" />
            <img src={github} alt="github" />
        </div>
    </div>
  )
}

export default Footer