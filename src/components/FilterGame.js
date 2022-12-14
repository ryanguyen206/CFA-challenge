import React from 'react'

import { searchData, options } from '../utils/getData'





const FilterGame = ({setGames, setSingleGame, setIsLoading, setIsMultipleGames}) => {


    const commonFilterSettings = (res) => {
        setGames(res);
        setIsMultipleGames(true)
        setSingleGame('')
        setIsLoading(false);
    }
    
    const handleFilteredGames = async (e) => {
            setIsMultipleGames(false);
            const res = await searchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${e.target.value}`,options)
            commonFilterSettings(res)
    }

    const handleAlphabeticalOrder = async (e) => {
        setIsMultipleGames(false);
        const res = await searchData('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical',options)
        commonFilterSettings(res)
    }

  return (
    <div className='m-auto text-center mb-4'>
            <form>
                <input
                    type="radio"
                    id="MMO"
                    value="MMO"
                    name="filter_game"
                    onClick={(e) => handleFilteredGames(e)}
                    className='m-2'
                />
                <label htmlFor='MMO'>MMO</label>

                <input
                    type="radio"
                    id="shooter"
                    value="shooter"
                    name="filter_game"
                    onClick={(e) => handleFilteredGames(e)}
                    className='m-2'
                />
                <label htmlFor='shooter'>Shooter</label>

                <input
                    type="radio"
                    id="PVP"
                    value="PVP"
                    name="filter_game"
                    onClick={(e) => handleFilteredGames(e)}
                    className='m-2'
                />
                <label htmlFor='PVP'>PVP</label>

                <input
                    type="radio"
                    id="alphabetical"
                    value="alphabetical"
                    name="filter_game"
                    onClick={(e) => handleAlphabeticalOrder(e)}
                    className='m-2'
                />
                <label htmlFor='alphabetical'>Alphabetical</label>
            </form>

    </div>
  )
}

export default FilterGame