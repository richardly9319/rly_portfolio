import React, { useEffect } from 'react'

import { About, About2, Footer, Header, Work } from './container'
import { Navbar } from './components'
import './App.scss'
import Header2 from './container/Header/Header2'






const App = () => {
  return (
    <div className="app">
        
        <Navbar />
        <Header2 />
        
        <About />
        <Work />
        
        {/* <About2 /> */}

        <Footer />

    </div>
  )
}

export default App