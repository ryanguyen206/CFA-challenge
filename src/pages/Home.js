import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { searchData, options } from '../utils/getData';
import Search from '../components/Search';

const Home = () => {

    const [games, setGames] = useState([]);
    const [singleGame, setSingleGame] = useState({})




    useEffect(() => {
        const allGames = async () => {
        const res = await searchData('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
        setGames(res.slice(0,30));
      }
  
        allGames();
    }, [])
    
    console.log(singleGame)

  return (
    <>
        <Search 
            setSingleGame={setSingleGame}

        />
     
        {(Object.keys(singleGame).length === 0) ?  
            (<div>
                {games.map((game, index) => (
                    <Card key={index} game={game} />
        ))}
            </div>)
         : 
         <div>    
            <h3>{singleGame.title}</h3>
            <p>{singleGame.short_description}</p>
            <img src={singleGame.thumbnail}/>
        </div>}

    </>
  )
}

export default Home