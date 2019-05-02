import React from 'react'
import HeroRow from './HeroRow'

const HeroTable = ({heroes, killHero, useRing, useRingStyle}) => (
  <table className="characters-table">
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>

      {heroes.map(({name, race, age, weapon}, index) => (
        <HeroRow key={index} name={name} race={race} age={age} weapon={weapon} killHero={killHero} useRing={useRing} useRingStyle={useRingStyle} />
      
      ))}
    </tbody>
  </table>
)

export default HeroTable
