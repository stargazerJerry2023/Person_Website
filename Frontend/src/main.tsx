import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Hero from './Components/Hero/Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <App />
  </StrictMode>,
)
