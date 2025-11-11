import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/pagea">PageA</Link>
    <Link to="/pageb">PageB</Link>
    <Link to="/pagec">PageC</Link>
    <Link to="/paged">PageD</Link>
    <Link to="/pagee">PageE</Link>
    <Link to="/pagef">PageF</Link>
    <Link to="/pageg">PageG</Link>
    </>
  )
}

export default Home