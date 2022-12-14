import React from 'react'
import GameCard from './GameCard'

const Games = ({games, singleGame, isLoading, isMultipleGames, setIsMultipleGames}) => {

  return (
    <div className='border-black max-w-screen-2xl m-auto gap-6 p-4'>
        {!isMultipleGames ?  <p className='font-bold uppercase text-2xl text-center mb-6'>Loading...</p> :  Object.keys(singleGame).length == 0   ?     (
            <div>
            <p className='font-bold uppercase text-2xl text-center mb-6'>Showing {games.length} results</p>
            <div className='gridContainer'>
                {games.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
            </div>)  : <p></p>

        }
        
        {/* logic
            if isLoading is true, write ...loading
            once single game loads aka object.key length > 0
            render out the single game, else render nothing
        */}
        
        {isLoading  ? <p className='font-bold uppercase text-2xl text-center mb-6'>Loading...</p> : Object.keys(singleGame).length !== 0 ?
            <div className='m-auto'>
                <p className='font-bold uppercase text-2xl text-center mb-6'>Showing one result</p>
                <div className='singlePicContainer m-auto flex flex-col text-center'>   
                    <div className='singleGamePic'>
                        <img className='gamePicture'src={singleGame.thumbnail} alt="thumbnail of game"/>
                    </div>
                    <h3 className='p-4 uppercase font-bold text-xl'>{singleGame.title}</h3>
                    <p>Game ID: {singleGame.id}</p>
                    <p>Main Genre: {singleGame.genre}</p>
                    <p className='p-4'>{singleGame.short_description}</p>
                </div>
        </div> : <p></p>} 
        
    </div>
  )
}

export default Games