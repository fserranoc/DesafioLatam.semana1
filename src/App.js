import React, { Component } from 'react';
import logo from './logo.svg';
import TableFilter from './components/TableFilter'
import HeroTable from './components/HeroTable'
import './App.css';

const heroes = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      useRing: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.useRing = this.useRing.bind(this)

   
  }

  handleInputChange (e) {
    this.setState({
      filterText: e.target.value
    })
  }

  killHero (e){
    let tr =  e.target.parentNode.parentNode.parentNode
    tr.className = 'kill-hero'
  }

  useRing(e){
    let tr =  e.target.parentNode.parentNode.parentNode
    tr.className = 'use-ring'
    this.setState({
      useRing:true
    })
    
  }
  

  render() {
    const {filterText} = this.state
    const {useRing} = this.state

    let filteredHeroes = heroes
    let useRingStyle = ''

    if (filterText) {
      filteredHeroes = heroes.filter(hero => {
        return hero.name.includes(filterText)
      })
    }

    if(useRing)
    {
        useRingStyle = 'use-ring'
    }

    return (
      <div className="index">
        <h2>Fellowship of the Ring</h2>

        <div className="container">
          <TableFilter
            filterText={filterText}
            handleChange={this.handleInputChange}
            placeHolder='Input search...'
          />

          {filteredHeroes.length > 0 && <HeroTable heroes={filteredHeroes} killHero={this.killHero} useRing={this.useRing} useRingStyle={useRingStyle} /> }

          {filteredHeroes.length === 0 && <div>No heroes....</div> }
          
        </div>
        
      </div>
    );
  }
}

export default App;
