import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuData } from '../menu/menudata';

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

  return (
    <div>
      <div>
        <p className='text-sm'>
          <span className='opacity-70'>Menu/</span>
          <span className='font-bold'>{menuTitle}</span>
        </p>
      </div>

    </div>
  );
};

export default Foods;
