import React, { Component } from 'react';
import logo from './logo.svg';
import TableFilter from './components/TableFilter'
import HeroTable from './components/HeroTable'
import './App.css';

const heroes = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔️' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡️' }
]

class App extends Component {
  constructor (props) {
    super(props)
    
    const heroesModified = heroes.map( h => ({...h, killed:false, useRing:false }))  
    
    this.state = {
      filterText: '',
      newHeroes: heroesModified,
      enableRing: true
    }

     
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKillHero = this.handleKillHero.bind(this)
    this.handleUseRing = this.handleUseRing.bind(this)

   
  }

  handleInputChange (e) {
    this.setState({
      filterText: e.target.value
    })
  }

  handleKillHero (e, index){

    var st = this.state     
    st.newHeroes[index].killed = true
    this.setState(st)
    
  }

  handleUseRing(e, index){

    var st = this.state     
    st.newHeroes[index].useRing = true
    st.enableRing = false;
    this.setState(st)
    
  }
  

  render() {
    const filterText = this.state.filterText
    const enableRing = this.state.enableRing
    let filteredHeroes = this.state.newHeroes


    if (filterText) {
      filteredHeroes = filteredHeroes.filter(hero => {
        return hero.name.includes(filterText)
      })
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
          <br></br>
          {filteredHeroes.length > 0 && <HeroTable heroes={filteredHeroes} handleKillHero={this.handleKillHero} handleUseRing={this.handleUseRing} enableRing={enableRing} /> }

          {filteredHeroes.length === 0 && <div>No heroes....</div> }
          
        </div>
        
      </div>
    );
  }
}

export default App;
