import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Banner from './Banner.jsx'
import Card from './Card.jsx'
import Product from './Product.jsx'
import FooterSection from './FooterSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Banner />
    <Card />
    <Product /> 
    <FooterSection />
  </React.StrictMode>,
)
