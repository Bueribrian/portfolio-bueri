import React from 'react'
import Title from './Title'

export default () => {
  return (
    <section id='sectionSkills'>
      <div className='container-big'>
        <Title text='Habilidades' />
        <div className='skill-container'>
          <div className='skill'>
            <img alt='skill icon' src='./img/gear.svg' className='skill-img' ></img>
            <p>Esto es un texto de relleno para hacer espacion y poder maquetar el texto y visualizar correctamente el espacion en la seccion por lo tanto no tiene ningun significa ni valor en esta pagina </p>
          </div>

          <div className='skill'>
            <img alt='skill icon' src='./img/heart.svg' className='skill-img' ></img>
            <p>Esto es un texto de relleno para hacer espacion y poder maquetar el texto y visualizar correctamente el espacion en la seccion por lo tanto no tiene ningun significa ni valor en esta pagina </p>
          </div>

          <div className='skill'>
            <img alt='skill icon' src='./img/phone.svg' className='skill-img' ></img>
            <p>Esto es un texto de relleno para hacer espacion y poder maquetar el texto y visualizar correctamente el espacion en la seccion por lo tanto no tiene ningun significa ni valor en esta pagina </p>
          </div>

          <div className='skill'>
            <img alt='skill icon' src='./img/head.svg' className='skill-img' ></img>
            <p>Esto es un texto de relleno para hacer espacion y poder maquetar el texto y visualizar correctamente el espacion en la seccion por lo tanto no tiene ningun significa ni valor en esta pagina </p>
          </div>
        </div>
      </div>
    </section>
  )
}
