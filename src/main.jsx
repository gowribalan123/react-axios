import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import FetchwithAxios from './components/FetchwithAxios.jsx'
//import DataFetchingComponent from './components/DataFetchingCompnent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FetchwithAxios/>
  </StrictMode>,
)
