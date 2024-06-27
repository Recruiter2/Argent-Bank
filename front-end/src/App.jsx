import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import User from './pages/User/Profile'
import Login from './pages/Login/Login'




import './App.css'

function App() {
    const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
            path="/profile"
             element={isConnected ? <User /> : <Navigate to="/login"/>} />
            <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
    </BrowserRouter>
)
  
}

export default App
