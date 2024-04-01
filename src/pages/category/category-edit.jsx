import React from 'react'
import { CategoryForm } from '../../components/form/category-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleCategory } from "../category/service/query/useGetSingleCategory"
import { useEditCategory } from './service/mutation/useEditCategory'
export const CategoryEdit = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetSingleCategory(id)
    const {mutate} = useEditCategory(id)
    const navigate = useNavigate()
    const submit = ( )=>{
        
        mutate(data,{
            onSuccess
        })
    }
  return ( isLoading ? (<h2>Loading...</h2>) :
   <CategoryForm initialValue={data} submit={submit}/>
  )
}
