import React from 'react'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <>
        <div style={{
            display:"flex" , flexDirection:"space-between", justifyContent:"center"
            , gap:"20px", padding:"10px", backgroundColor:"lightgray"
            }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dep/account">Account</Link>
            <Link to="/dep/marketing">Marketing</Link>
            <Link to="/register">Register</Link>
        </div>

    </>
  )
}

export default MenuBar