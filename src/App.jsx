import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/SignUp'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App