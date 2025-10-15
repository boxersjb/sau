import React from 'react'
import MenuBar from '../components/MenuBar'
import Welcome from '../components/Welcome' 
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <MenuBar />
      <Welcome />
      <h1>Home</h1>
      <Footer />
    </>
  )
}

export default Home