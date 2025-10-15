import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Account from './views/Account'
import Register from './views/Register'
import Marketing from './views/Marketing'
import Error404 from './views/Error404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dep/account" element={<Account />} />
          <Route path="/dep/marketing" element={<Marketing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App