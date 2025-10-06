import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Sections/about'
import Projects from './Sections/projects'  
import Contact from './Sections/contact'
import Navbar from './Sections/Navbar'

function App() {
  return (
    <body> 
      <>
      <Navbar />
      {/* <header className="header">
        <div className='profile-container'>
          <img 
            src="src/assets/headshot.png" 
            alt="Profile" 
            className="profile-picture" 
          />
        </div>
        <div className='profile-text'>
          <h1>Kyrilous Nasr</h1>
          <p>Computer Science Major at CUNY Queens College</p>
        </div>
      </header> */}

      <header className="header">
      <div className="profile-container">
        <img 
          src="src/assets/headshot.png" 
          alt="Profile" 
          className="profile-picture" 
        />
        <div className="profile-text">
          <h1 className='name'>Kyrilous Nasr</h1>
          <p>Computer Science Major at CUNY Queens College</p>
        </div>
      </div>
</header>


    
          <About />
          <Projects />
          <Contact />

          


      </>
    </body>
  )
}

export default App
