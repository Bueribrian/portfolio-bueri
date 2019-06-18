import React from 'react'

const cardProyect = ({ data, direction }) => {
  const { image, title, description, tools, githubUrl, url } = data
  const decideColorTool = (tool) => {
    switch (tool) {
      case 'react':
        return { "padding": ".5rem", "color": "#61dafb", "border": "1px #61dafb solid", "borderRadius": "14px" }
      case 'html':
        return { "padding": ".5rem", "color": "orange", "border": "1px orange solid", "borderRadius": "14px" }
      case 'sass':
        return { "padding": ".5rem", "color": "#bf4080", "border": "1px #bf4080 solid", "borderRadius": "14px" }
      case 'node':
        return { "padding": ".5rem", "color": "green", "border": "1px green solid", "borderRadius": "14px" }
      case 'css':
        return { "padding": ".5rem", "color": "#3498db", "border": "1px #3498db solid", "borderRadius": "14px" }
      case 'js':
        return {
          "padding": ".5rem", "color": "#f0db4f", "border": "1px #f0db4f solid", "borderRadius": "14px"
        }
      default: 
      return {
        "padding": ".5rem", "color": "gray", "border": "1px gray solid", "borderRadius": "14px"
      }
      
    }
  }
  return (
    <div className='proyect-item'>
      <img className='proyect-item-img' alt='proyect demo' src={image === '' ? './img/cool-background.png' : image} />
      <div className='proyect-item-content'>
        <h3 className='proyect-item-content--title'>{title}</h3>
        <p className='proyect-item-content--desc'>{description}</p>

        <ul className='proyect-item-content--tools'>
          {tools.map((tool, id) => <li key={id} style={decideColorTool(tool)}>{tool}</li>)}
        </ul>
        <div className='proyect-item-content--links'>
          <a className='' rel="noopener noreferrer" target='_blank' href={githubUrl}><i className="fab fa-github"></i></a>
          <a className='' rel="noopener noreferrer" target='_blank' href={url}>Visitar <i className="fas fa-arrow-circle-right"></i></a>
        </div>
      </div>
    </div>
  )
}
export default cardProyect