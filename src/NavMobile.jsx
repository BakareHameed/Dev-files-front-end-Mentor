import React from 'react';
import { navigation } from './data';
import './App.css'

const NavMobile = () => {
  return <div className='black w-full h-full shadow-2xl'>
    <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
      {navigation.map((items,index) =>{
        return(
          <li key={index}>
            <a className='text-xl font-medium capitalize text-white' href={items.href}>{items.name}</a>
          </li>
        )
      })}
    </ul>
  </div>;
};

export default NavMobile;
