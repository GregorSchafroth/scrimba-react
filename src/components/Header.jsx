import React from "react"
import reactLogo from '../assets/react.svg'

export default function Header(){
  return(
    <header>
      <nav className='nav-bar'>
        <img src={reactLogo} className='nav-img'></img>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}