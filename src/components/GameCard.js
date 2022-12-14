import React from 'react'

const GameCard = ({game}) => {
  return (
    <div className='rounded-xl shadow-md flex flex-col items-center '>
        <div class='picContainer'>
          <img className='gamePicture' alt="thumbnail" src={game.thumbnail}/>
        </div>

        <h3 className='p-4 uppercase font-bold text-xl'>{game.title}</h3>
        <p>Game ID: {game.id}</p>
        <p>Main Genre: {game.genre}</p>
        <p className='p-4'>{game.short_description}</p>
    </div>
  )
}

export default GameCard