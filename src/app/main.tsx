import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '../pages/home/home-page.ui'
import './index.css'
import {ParallaxProvider} from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ParallaxProvider>
          <HomePage />
      </ParallaxProvider>
  </React.StrictMode>,
)
