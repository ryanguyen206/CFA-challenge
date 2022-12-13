import React from 'react'

const Card = ({game}) => {
  return (
    <div>
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
        <img src={game.thumbnail}/>


    </div>
  )
}

export default Card