import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css';

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
)
