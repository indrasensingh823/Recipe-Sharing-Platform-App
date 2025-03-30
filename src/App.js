import React from 'react'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SubmitRecipe from './pages/SubmitRecipe';
import { BrowserRouter as Router, Route, Routes,   } from "react-router-dom";
import './App.css'





const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/submit" element={<SubmitRecipe />} />
         
      </Routes>
      <Footer />
    </Router>
    
  )
}
export default App
