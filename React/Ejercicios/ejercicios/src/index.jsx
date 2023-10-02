import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelloWolrd from './components/ejercicio1/HelloWorld.jsx'
import HelloWorldName from './components/ejercicio2,3y4/HelloWorldName'
import Suma from './components/ejercio5/ejercicio5'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWolrd/>
    <HelloWorldName
    name = "Paco"
    />
    <Suma/>
  </React.StrictMode>,
)
