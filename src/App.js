import React, {Component} from 'react'
import characters from './heroes.js'


class App extends Component{
  render(){
    
    return (
     
      
      
    )
    
  }

}

const Hero = props => {
  return <div className='hero-item'>{props.name}</div>
  
}

const HeroesList = () => {
  return characters.map(c => {
    return <Hero name={c.name}/>
  })
}

export default App
