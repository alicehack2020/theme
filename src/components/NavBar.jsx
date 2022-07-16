import React, { useContext } from 'react'
import "./NavBar.css"
import {ThemeContext} from "../context/ThemeContext"

const NavBar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
     
  return (
    <div className='flex' style={{backgroundColor:theme}}>
        <div>Home</div>
        <div>About</div>
        <div className='theme' onClick={()=>toggleTheme()}>Theme</div>
    </div>
  )
}

export default NavBar