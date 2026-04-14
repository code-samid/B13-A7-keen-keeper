import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-red-500 text-3xl text-white'>Hello</h2>
  </StrictMode>,
)
