import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import Bmi from './views/Bmi.jsx'
import BMR from './views/BMR.jsx'
import Car from './views/Car.jsx'
import Error404 from './views/Error404.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<BMR />} />
          <Route path="/car" element={<Car />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
