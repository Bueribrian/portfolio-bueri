
import React, { Component } from 'react'
import './styles/main.scss';
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      loaded:false
    }
  }
  componentDidMount(){
    this.setState({loaded:true})
    
  }
  render() {
    return (
      <div>
      {this.state.loaded ?
      <>
        <Hero height='80vh' />
        <Main />
        <Footer />
      </>
      :
      <h2>CARGANDO...</h2>
    }
    </div>
    )
  }
}



