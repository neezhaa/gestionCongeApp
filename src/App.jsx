import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path="/login" 
          element={<Login />} />
        <Route 
          path="/" 
          element={
            <RequireAuth loginPath="/login">
              <Dashboard/>
            </RequireAuth>
          } />
      </Routes>
    </>
  )
}

export default App
