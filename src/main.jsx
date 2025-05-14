import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Rutas } from './components/routes/Rutas/Rutas'

import { Experiencia } from './components/pages/Experiencia/Experiencia'
import { Historia } from './components/pages/Historia/Historia'
import { Home } from './components/pages/Home/Home'
import { Introduccion } from './components/pages/Introduccion/Introduccion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rutas></Rutas>
    </BrowserRouter>
  </StrictMode>,
)
