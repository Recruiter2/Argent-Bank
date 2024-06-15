import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Sign-in />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
    </BrowserRouter>
)
  
}

export default App
