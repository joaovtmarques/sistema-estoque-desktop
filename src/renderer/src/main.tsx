import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/main.css'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="h-screen w-screen select-none bg-primary px-12 overflow-x-hidden">
      <AppRoutes />
    </div>
  </React.StrictMode>
)
