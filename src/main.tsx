import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { nameContext} from './components/login/loginformcomp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <nameContext.Provider value={"dummy!"}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </nameContext.Provider>
)
