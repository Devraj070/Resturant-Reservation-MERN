import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Home' element={<Home/>}/>
          
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
