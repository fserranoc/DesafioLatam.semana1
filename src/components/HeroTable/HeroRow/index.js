import React from 'react'

const HeroRow = ({index, name, race, age, weapon, killed, useRing, enableRing, handleKillHero, handleUseRing}) => (
  
  <tr className={`character-row ${killed ? 'kill-hero' : ''} ${useRing ? 'use-ring':''}`}   >
    <td>{name}</td>
    <td>{race}</td>
    <td>{age}</td>
    <td>{weapon}</td>
    <td>
      <div className="controls">
        <button onClick={(event) => handleKillHero(event, index)}> ☠ Kill </button>
        <button onClick={(event) => handleUseRing(event, index)} className={enableRing ? '' :'disable-ring'}>💍 Use Ring {enableRing}</button>
      </div>
    </td>
  </tr>
    
)




export default HeroRow
