import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reactLogo from './assets/react.svg'
import './index.css'

function Header(){
  return(
    <header>
      <img src={reactLogo}></img>
      <h1>Why I am excited to learn react</h1>
    </header>
  )
}

function MainContent(){
  return(
    <div>
      <ul>
        <li>Modern UI Development: Build dynamic and responsive user interfaces.</li>
        <li>Component-Based Architecture: Reusable components streamline development.</li>
        <li>Large Community: Abundant resources, support, and libraries.</li>
        <li>High Demand: Valuable skill in the job market.</li>
      </ul>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <footer>
        <small>© 2024 Gregor Schafroth. All rights reserved.</small>
      </footer>
    </div>
  )
}

function Page(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
