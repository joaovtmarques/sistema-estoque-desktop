import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="h-screen w-screen select-none">
      <AppRoutes />
    </div>
  </React.StrictMode>
)