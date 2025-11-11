import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import ShowAllTask from './screens/ShowAllTask.jsx'
import AddTask from './screens/AddTask.jsx'
import UpdateTask from './screens/UpdateTask.jsx'
import Home from './screens/Home.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtask' element={<AddTask />} />
        <Route path='/updatetask/:id' element={<UpdateTask />} />
        <Route path='/showalltask' element={<ShowAllTask />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App