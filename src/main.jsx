import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
