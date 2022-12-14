import React from 'react'

const GameCard = ({game}) => {
  return (
    <div className='rounded-xl shadow-md flex flex-col items-center '>
        <div class='picContainer'>
          <a href={game.game_url}> 
            <img className='gamePicture' alt="thumbnail" src={game.thumbnail}/>
          </a>

        </div>

        <h3 className='p-4 uppercase font-bold text-2xl max-[960px]:text-lg max-[600px]:text-sm'>{game.title}</h3>
        <p>Game ID: {game.id}</p>
        <p className='max-[960px]:text-lg max-[600px]:text-sm'> Genre: {game.genre}</p>
        <p className='p-4'>{game.short_description}</p>
    </div>
  )
}

export default GameCard