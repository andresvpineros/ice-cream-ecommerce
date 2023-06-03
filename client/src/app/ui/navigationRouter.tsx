import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages'
import { AppRoutes } from '@/app/common/utils'

export const navigationRouter = createBrowserRouter([
  { path: AppRoutes.HOME, element: <HomePage /> },
])
