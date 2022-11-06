import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './style'
import './style.ts'
import 'antd/dist/antd.css'
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <ToastContainer theme='colored' />

    <AuthProvider>
      <App />
    </AuthProvider>
  </>
)
