import React from 'react'

export default () => {
  return (
    <footer id='footer'>
      <a className="btn btn-purple" href='#email'>Contactar (msg);</a>
      <div className='social-media-footer'>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/brian-bueri-838845155/'>
        <img alt='figure footer social' style={{'height':'10rem','margin':'2rem'}} src='./img/github.svg'></img>
        </a>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/Bueribrian/'>
        <img alt='figure footer social' style={{'height':'12.5rem','margin':'1rem'}} src='./img/linkedin.svg'></img>
        </a>
      </div>
      <p className='footer-copy'>© copyright pagina hecha por B.Brian</p>
    </footer>
  )
}
