import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuData } from '../menu/menudata';
import { foodsData } from './foodsData';
const Foods = () => {
  const [menuTitle, setMenuTitle] = useState('');
const { id } = useParams();

  useEffect(() => {
    const menuItem = menuData.filter(item => item.link === id);

    if (menuItem.length > 0) {
      setMenuTitle(menuItem[0].title);
    } else {
      setMenuTitle('Menu item not found');
    }
  }, [id]);
 console.log(foodsData);
 
  return (
    <div>
      <div>
        <p className='text-sm'>
          <span className='opacity-70'>Menu/</span>
          <span className='font-bold'>{menuTitle}</span>
        </p>
      </div>
      {foodsData.map(food=>(
        <div className='flex flex-col mt-[20px]' key={food.id}>
            <img className='imgMenu rounded-[20px]' src={food.url} alt={food.title} />
            <p className='text-sm pt-2 text-[#909398]'>{food.title}</p>
            <p className='text-xl font-bold text-[#FFD60A]'>{food.price}</p>
        </div>
      ))}

    </div>
  );
};

export default Foods;
