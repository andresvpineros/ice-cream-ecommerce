import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/common/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { navigationRouter } from '@/app/ui/navigationRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={navigationRouter} />
  </React.StrictMode>
)
