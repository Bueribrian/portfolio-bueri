import React from 'react'
import SectionAbout from './SectionAbout'
import SectionProyects from './SectionProyects'
import SectionSkills from './SectionSkills'
import SectionStudies from './SectionStudies'


export default () => {
  return (
    <main>
      <SectionProyects />
      <SectionAbout />
      <SectionSkills />
      <SectionStudies />
    </main>
  )
}
