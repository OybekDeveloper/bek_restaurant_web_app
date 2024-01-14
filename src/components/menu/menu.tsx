import React from 'react';
import { menuData } from './menudata';
import './menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      
      <div className='flex flex-col justify-center items-cenid) gap-6 mt-4 '>
        {menuData?.map(item => (
          <div className='relative flex justify-center items-center' key={item.id}>
            <div className='imgMenuContainer'>
              <Link to={`/foods/${item.link}`}>
              <img className='imgMenu rounded-[20px]' src={item.imgUrl} alt={item.title} />
              <div className='overlay'></div>
              </Link>
            </div>
            <h1 className='absolute z-10 font-bold text-2xl text-white'>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
