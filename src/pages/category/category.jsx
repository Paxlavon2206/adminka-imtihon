import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoryList } from './service/query/useGetCategoryList';
import {Button} from "../../components/button/button"
import {EditButton} from "../../assets/icons/edit-button"
import {DeleteButton} from "../../assets/icons/delete-button"
import { useDeleteCategory } from './service/mutation/useDeleteCategory';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

export const Category = () => {
  const {data, isLoading} = useGetCategoryList()
  const {mutate, isPending} = useDeleteCategory()
  const client = useQueryClient();
  const deleteItem = (id)=>{
    mutate(id,{
      onSuccess:(res)=>{
        client.invalidateQueries({queryKey:["category-list"]}),
        toast.success("Удалено!")
      },
      onError:()=>{
        toast.error("Ошибка!")
      }
    })
  }
  const editItem = ()=>{

  }
  return (
    <>
     <div className='p-6 relative'>
      <h3 className='text-[20px] font-extrabold'>Все категории ({data?.length})</h3>
   <div className='w-[200px]  mb-10'> <Link className='bg-secondary absolute right-[2%] top-5 text-white pt-3 pb-3 px-5 rounded-lg' to="/app/category/create">Создать категорию</Link></div>
   <div>
    {data?.map((item, index)=> 
    <div className='flex border-b pb-5 pt-5  items-center' key={item.id}>
      <p className='text-[15px] font-extrabold mr-[100px]'>Категория {index + 1}</p> 
      <div className='w-[90px] mr-[100px]'>
        <img src={item.img} alt="img" />
      </div>
      <p className='font-bold'>{item.title}</p>
      <Link to={`/app/category/edit/${item.id}`} onClick={editItem} className=" absolute right-[70px]"> <EditButton/> </Link>
      <Button onClick={()=>deleteItem(item.id)} className=" absolute right-6"> <DeleteButton/> </Button>
    </div>)}
    <ToastContainer/>
   </div>
    </div>
    </>
   
  );
};
