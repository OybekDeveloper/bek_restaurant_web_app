import React from 'react'
import { menuData} from './menudata'
import './menu.css'
const Menu = () => {
  console.log(menuData);
  
  return (
    <div>
      <div className='flex gap-3'>
        <button className='btnMenu'>Menu</button>
        <button className='btnMenu'>Biz haqimizda</button>
        <button className='btnMenu'>Mijozlar fikri</button>
      </div>
      <div  className='flex flex-col justify-center items-center gap-4 mt-4 '>
        {menuData?.map(item=>(
          <div className='relative flex justify-center items-center' key={item.id}>
            <img className='imgMenu rounded-[20px]' src={item.imgUrl} alt={item.title}/>
            <h1 className='absolute z-10 font-bold text-2xl text-white'>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu