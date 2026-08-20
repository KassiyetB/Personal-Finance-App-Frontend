import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import { RouterProvider } from 'react-router-dom'
import router from './app/router'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
