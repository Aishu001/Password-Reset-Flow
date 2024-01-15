import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  HashRouter as Router, Route, Routes  } from "react-router-dom"
import SignIn from './SignIn'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'


function App() {
 
  return (
    <>
    <Router>
      <Routes>
      <Route path ="/" exact Component={SignIn} ></Route>
              <Route path ="/login" exact Component={Login} ></Route> 
      <Route path="/forgotPassword" element={<ForgetPassword/>}></Route>
      <Route path="/reset_password/:userId/:token" element={<ResetPassword/>}></Route>
      </Routes>
   
    </Router>
      
    </>
  )
}

export default App
