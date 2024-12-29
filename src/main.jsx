// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from 'react-auth-kit'

createRoot(document.getElementById('root')).render(
  <AuthProvider
    authType="cookie"
    authName="_auth"
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}
  >
    <App />
    </AuthProvider>,
)
