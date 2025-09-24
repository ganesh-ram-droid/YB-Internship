import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Pages/From'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Form/>
  </StrictMode>,
)
