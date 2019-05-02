import React from 'react'

const HeroRow = ({name, race, age, weapon, killHero, useRing, useRingStyle}) => (
  
  <tr className="character-row">
    <td>{name}</td>
    <td>{race}</td>
    <td>{age}</td>
    <td>{weapon}</td>
    <td>
      <div className="controls">
        <button onClick={killHero}> ☠ Kill</button>
        <button onClick={useRing} className={useRingStyle}>💍 Use Ring</button>
      </div>
    </td>
  </tr>
    
)




export default HeroRow
