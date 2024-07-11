import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reactLogo from './assets/react.svg'
import './index.css'

const page = (
  <div>
    <img src={reactLogo} alt="" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  page
)
