import React, { useEffect } from 'react'

import { About, Education, Footer, Header, Portfolio } from './container'
import { Navbar } from './components'
import './App.scss'






const App = () => {
  return (
    <div className="app">
        
        <Navbar />
        <Header />

        <Education />
        <Portfolio />
        
        <About />

        <Footer />

    </div>
  )
}

export default App