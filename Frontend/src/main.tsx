import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Hero from './Components/Hero/Hero.tsx'
import AboutMe from '../src/Components/About/AboutMe.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
