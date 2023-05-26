import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Para escribir un codigo mas estricto
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
)
