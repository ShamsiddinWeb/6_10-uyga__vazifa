import './App.css'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
import NotFound from './pages/not-found/NotFound'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}/>  
      </Route>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
