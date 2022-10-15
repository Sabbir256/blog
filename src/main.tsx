import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import New from './pages/write'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/blog/' element={<App/>} />
          <Route path='/blog/new' element={<New/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
