import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'sonner'

function App() {

  return (
    <AuthProvider>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
