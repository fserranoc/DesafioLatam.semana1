import React from 'react'
import HeroRow from './HeroRow'



const HeroTable = ({heroes, handleKillHero, handleUseRing, enableRing}) => (
  <table className="characters-table">
    <tbody >
      <tr className="character-row">
        <th className="">Name </th>
        <th className="">Race </th>
        <th className="">Age </th>
        <th className="">Weapon </th>
        <th className="">Actions</th>
      </tr>

     
      {heroes.map(({name, race, age, weapon, killed, useRing}, index) => (
        <HeroRow key={index} index={index} name={name} race={race} age={age} weapon={weapon} killed={killed} useRing={useRing} enableRing={enableRing} handleKillHero={handleKillHero} handleUseRing={handleUseRing} />

      ))}
    </tbody>
  </table>
)

export default HeroTable
