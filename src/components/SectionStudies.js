import React from 'react'
import Title from './Title'


export default () => {
  return (
    <section id='studies'>
      <Title text='Estudios' />
      <div className='container'>
      <ul className=' mt-xl ml-l' style={{"zIndex":"20"}}>
       <li>Curso Udemy - Advance SASS and CSS</li>
       <li>#Javascript30 - Curso online 30 dias de Vanilla javascript</li>
       <li>Curso Udemy - Begginer fullstack web developer</li>
       <li>ComunidadIT - Curso acelerado presencial desarrollo web</li>
       <li>E.T.N°3 - Maria Sanchez de Thompson</li>
      </ul>

      </div>
    </section>
  )
}
