import React, {useState, useEffect} from 'react'
import Games from '../components/Games';
import { searchData, options } from '../utils/getData';
import Search from '../components/Search';
import FilterGame from '../components/FilterGame';

const Home = () => {

    const [games, setGames] = useState([]);
    const [singleGame, setSingleGame] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isMultipleGames, setIsMultipleGames] = useState(true);
  
    
    useEffect(() => {
        const allGames = async () => {
        const res = await searchData('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
        setGames(res.slice(0,30));
      }
  
        allGames();
    }, [])
    


  return (
    <>
        <Search 
            setSingleGame={setSingleGame}
            setIsLoading={setIsLoading}
            setIsMultipleGames={setIsMultipleGames}
        />
        <FilterGame 
          setSingleGame={setSingleGame}
          setGames={setGames}
          setIsLoading={setIsLoading}
          setIsMultipleGames={setIsMultipleGames}
        />
        <Games
          singleGame = {singleGame}
          games = {games}
          isLoading = {isLoading}
          isMultipleGames={isMultipleGames}
    
         
        />
     
      

    </>
  )
}

export default Home