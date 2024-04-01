import React from 'react'
import { CategoryForm } from '../../components/form/category-form'
import { useCreateCategory } from './service/mutation/useCreateCategory'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CategoryCreate = () => {
    const {mutate} = useCreateCategory();
    const navigate = useNavigate()
     const submit = (data) =>{
        mutate(data, {
            onSuccess:()=>{
                toast.success("Successfully created!")
                navigate("/app/category")
            },
            onError:()=>{
                toast.error("Error occured!")
            }
        })
     }
  return (
    <div>
        <ToastContainer/>
        <CategoryForm submit={submit}/>
        
    </div>
  )
}
