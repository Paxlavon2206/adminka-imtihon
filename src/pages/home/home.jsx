import React from 'react'
import img from "../../assets/img/home-img.png"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
   <>
  <div className='pt-[30px] pb-[80px] px-6'>
  <h1 className='text-center text-[21px] font-extrabold leading-[72%] mb-[64px]'>Вы пока не создали ни одного товара</h1>
   <div className='w-[313px] mr-auto ml-auto mb-[66px]'>
    <img src={img} alt="img" />
   </div>
   <div className='w-[224px] mr-auto ml-auto'><Link className='rounded-[6px] bg-secondary text-white px-6 py-[15px]'>Создать первый товар</Link></div>
  </div>
   
   </>
  )
}
