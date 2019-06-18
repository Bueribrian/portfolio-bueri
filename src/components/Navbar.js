import React from 'react'

export default () => {
 const toggleNavbar = (e)=>{
  let btnNavbar = document.querySelector('.btn-burger')
  let menuNavbar = document.querySelector('.navbar-menu')
  btnNavbar.classList.toggle('activated')
  menuNavbar.classList.toggle('disabled')
 }
  return (
    <div className='navbar'>
      <ul onClick={toggleNavbar} className='btn-burger'>
       <li className='btn-burger-item'></li>
       <li className='btn-burger-item'></li>
       <li className='btn-burger-item'></li>
      </ul>
      <div className='navbar-menu'>
        <a href='#proyectsSection' className="navbar-menu-link">Practicas</a>
        <a href='#aboutme' className="navbar-menu-link">Sobre mi</a>
        <a href='#sectionSkills' className="navbar-menu-link">Habilidades</a>
        <a href='#studies' className="navbar-menu-link">Estudios</a>
        <a href='#footer' className="navbar-menu-link">Contacto</a>
      </div>
    </div>
  )
}
