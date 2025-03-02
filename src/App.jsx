import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'sonner'
import { LeaveProvider } from './context/LeaveContext'

function App() {

  return (
    <AuthProvider>
          <LeaveProvider>
              <Toaster richColors position="top-right" />
              <RouterProvider router={router} />
          </LeaveProvider>
    </AuthProvider>
  )
}

export default App

