import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import HelloWolrd from './components/ejercicio1/HelloWorld.jsx'
import HelloWorldName from './components/ejercicio2,3y4/HelloWorldName'

import App from './App'
import Suma from './components/ejercicio5/Suma'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWolrd/>
    <HelloWorldName
    name = "Paco"
    />
    <Suma/>
    <App/>
  </React.StrictMode>,
)
