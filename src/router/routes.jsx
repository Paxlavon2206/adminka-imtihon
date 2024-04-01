import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import {Home} from "../pages/home/home"
import { Login } from '../pages/login/login'
import { AppLayout } from '../layout/app-layout'
import {Category} from "../pages/category/category"
import {Product} from "../pages/products/product"
import {CategoryCreate} from "../pages/category/category-create"
import { CategoryEdit } from '../pages/category/category-edit'
export default [
    {
        component: <Login/>,
        id: nanoid(),
    },
    {
        component: <Home/>,
        path: "home",
        id: nanoid(),
    },
    {
        component: <AppLayout/>,
        path: "app",
        id: nanoid(),
    },
    {
        component: <Category/>,
        path: "category",
        id: nanoid(),
    },
    {
        component: <Product/>,
        path: "product/create",
        id: nanoid(),
    },
    {
        component: <CategoryCreate/>,
        path: "category/create",
        id: nanoid(),
    },
    {
        component: <CategoryEdit/>,
        path: "category/edit/:id",
        id: nanoid(),
    },
]
