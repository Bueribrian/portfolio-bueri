import React from 'react'
import Title from './Title'


export default () => {
  return (
    <section id='aboutme'>
      <Title text='Sobre mi' />
      <div className='container'>
         <div className='about'>
          <div className='about-content'>
           <p className='about-content-profile'>
           Mi Nombre es <span className='bolder color-purple-1 uppercase'> Brian Bueri </span>, Capacitado de forma autodidacta por medio de cursos como desarrollador web. Me considero una persona proactiva capaz de adaptarme a las funciones y tareas que me sean dadas. Actualmente me encuentro en constante desarrollo  tanto personal como profesional y dentro de mis principales objetivos se encuentra fortalecer mi experiencia laboral para participar en el desarrollo de nuevos proyectos y aprender.
           </p>
           <span className='line'></span>
           <div className='about-content-info'>
            <p>Edad: 22 años</p>
            <p>Ubicación: Palermo</p>
            <p>Disponibilidad: Full-time</p>
            <p>Correo: bueribrian@hotmail.com</p>
           </div>
           <div className='about-content-technologies'>
            <div className='about-content-technologies--item'>
              <img alt='icon sass' src='./img/sass.svg'></img>
            </div>
            <div className='about-content-technologies--item'>
            <img alt='icon react' src='./img/react.svg'></img>
            </div>
            <div className='about-content-technologies--item'>
            <img alt='icon node' src='./img/nodejs2.svg'></img>
            </div>
            <div className='about-content-technologies--item'>
            <img alt='icon html' src='./img/html5.svg'></img>
            </div>
           </div>
          </div>
          <div className='about-social'>
           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Bueribrian/'><img alt='icon linkedin' className='social-link' src='./img/github.svg'/></a>
           <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/brian-bueri-838845155/'><img alt='icon github' className='social-link' src='./img/linkedin.svg'/></a>
           <a className='btn btn-purple' href='./assets/cv' download=''>Cv(&#8595;);</a>
          </div>

         </div>
      </div>
    </section>
  )
}
