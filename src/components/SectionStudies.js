import React from 'react'
import Title from './Title'


export default () => {
  return (
    <section id='studies'>
      <Title text='Estudios' />
      <div className='container'>
      <ul className=' mt-xl ml-l' style={{"zIndex":"20"}}>
       <li>Curso Udemy - Begginer fullstack web developer</li>
       <li>#Javascript30 - Curso online 30 dias de Vanilla javascript</li>
       <li>ComunidadIT - Curso acelerado presencial Web developer </li>
       <li>E.T.N°3 - Maria Sanchez de Thompson</li>
      </ul>

      </div>
    </section>
  )
}
