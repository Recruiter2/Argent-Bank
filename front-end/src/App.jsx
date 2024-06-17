import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import User from './pages/User/User'
import SignIn from './pages/SignIn/SignIn'


import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
    </BrowserRouter>
)
  
}

export default App
