
import React, { Component } from 'react'
import CardProyect from './CardProyect'
import Title from './Title'
export default class SectionProyects extends Component {
  constructor(){
    super()
    this.state={
      categories : ['nodejs','react','sass','js','php'],
      proyects: [],
      virtualProyects: []
    }
  }
  fetchProyects = ()=>{
    fetch("./js/proyects.json")
    .then(res => res.json())
    .then(data => {
      let tempProyects = data.map(pro=>pro)
      this.setState({proyects:tempProyects,virtualProyects:tempProyects})
    })
  }
  componentDidMount(){
    this.fetchProyects()
  }

  render() {
    return (
      <div>
        <section id='proyectsSection'>
     
      <div className='container-big'>

      <Title  text='Proyectos'/>
      <div className=''>
       <div className='proyects'>
        <div className='proyects-filter'>
         <ul>
          {this.state.categories.map((cat,id)=><li id={cat+id} onClick={(e)=>{
            let elements = document.querySelectorAll('.proyects ul li')
            elements.forEach(el=>el.style.color='black')
            e.target.style.color='#3500d3'
            this.setState({virtualProyects:this.state.proyects.filter(pro=>pro.tools.includes(cat))})
          }} key={id}>{cat.toUpperCase()}</li>)}
         </ul>
        </div>
        <div className='proyects-container'>
         
         {
           this.state.virtualProyects.length === 0?
           'Por el momento no hay proyectos con esa tecnologia :( ':
           this.state.virtualProyects.map((item,index) => <CardProyect data={item} key={index} />)
         }
        </div>
       </div>
      </div>
      </div>
    </section>
      </div>
    )
  }
}

// export default () => {
//   const [categories, setCategories] = useState(['nodejs','react','sass','js','php'])
//   const [proyects, setProyects] = useState([])
//   const [virtualProyects, setVirtualProyects] = useState([])

//   const fetchProyects = ()=>{
//     fetch("./js/proyects.json")
//     .then(res => res.json())
//     .then(data => {
//       let tempProyects = data.map(pro=>pro)
//       setProyects(tempProyects)
//     })
//   }

//  useEffect(()=>{
//    fetchProyects()
//    setVirtualProyects(proyects)
//   },[proyects])

  
//   return (
//     <section id='proyectsSection'>
//       <Figure zIndex={-1} top={10} left={-20}>
//         <img alt='figure parallax' src='../img/pcircle.png'/>
//       </Figure>
//       <div className='container-big'>

//       <h2 className='title-section'>Practicas</h2>
//       <div className=''>
//        <div className='proyects'>
//         <div className='proyects-filter'>
//          <ul>
//           {categories.map((cat,id)=><li onClick={()=>{
//             setVirtualProyects(proyects.filter(pro=>pro.tools.includes(cat)))
//           }} key={id}>{cat.toUpperCase()}</li>)}
//          </ul>
//         </div>
//         <div className='proyects-container'>
         
//          {
//            virtualProyects.length === 0?'Por el momento no hay proyectos con esa tecnologia :( ':virtualProyects.map((item,index) => {
//            if(index%2==0){
//              return <CardProyect data={item} key={index} direction={{"flexDirection":"row-reverse"}}/>
//            }
//            return <CardProyect data={item} key={index} direction={{"flexDirection":"row"}} />
//          }
//         )}
//         </div>
//        </div>
//       </div>
//       </div>
//     </section>
//   )
// }
