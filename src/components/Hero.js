import React from 'react'
import Navbar from './Navbar'

export default ({height}) => {
 
  return (
    <header className='hero' >
      <Navbar />
      <div className='hero-content'>
        <h1 className=' hero-content-title hero-content-title--primary '>Bueri Brian;</h1>
        <h2 className=' hero-content-title hero-content-title--secondary '>Web developer;</h2>
      </div>
      <div className='hero-social'>
        <div className='hero-social--icon'>
          <a href=''>
        <i class="fab fa-github"></i>

          </a>
        </div>
        <div className='hero-social--icon'>
        <a href=''>
        <i class="fab fa-linkedin"></i>

          </a>
        </div>
      </div>
      <div className='hero-scroll-botton'>
        <a href='#proyectsSection' className=''>
        Scroll (&#8595;);
        </a>
      </div>
    </header>
  )
}

