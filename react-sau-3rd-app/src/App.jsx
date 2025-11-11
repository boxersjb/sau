import { useState } from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import PageD from './pages/PageD'
import PageE from './pages/PageE'
import PageF from './pages/PageF'
import PageG from './pages/PageG'
import Home from './components/Menubar'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pagea" element={<PageA />}></Route>
      <Route path="/pageb" element={<PageB />}></Route>
      <Route path="/pagec" element={<PageC />}></Route>
      <Route path="/paged" element={<PageD />}></Route>
      <Route path="/pagee" element={<PageE />}></Route>
      <Route path="/pagef" element={<PageF />}></Route>
      <Route path="/pageg" element={<PageG />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
