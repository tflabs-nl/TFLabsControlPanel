import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import '@fontsource-variable/nunito-sans/full.css';
import "@fontsource/josefin-sans/index.css"; // Defaults to weight 400
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
