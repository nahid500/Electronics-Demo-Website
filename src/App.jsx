import { Route, Routes } from 'react-router'
import './App.css' 
import HomePage from "./pages/Homepage/HomePage"
import NotFound from "./pages/NotFound"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AuthProvider from './context/AuthProvider'
import PrivateOutlet from './components/PrivateOutlet'

function App() {

  return (

    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />

        <Route path ='/' element={<PrivateOutlet />}>
        <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        
      </Routes>
    </AuthProvider>
  )
}

export default App
