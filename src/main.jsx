import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const navBar = (
  <nav>
    <h1>my Website</h1>
    <ul><li>item 1</li><li>item 2</li></ul>
  </nav>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  navBar
)
