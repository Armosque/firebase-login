import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../Login/Login';
import SingUp from '../signUp/SingUp';



export default function MyRoutes() {
  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<SingUp/>}/>

      </Routes>
        

    </Router>

  )
}
