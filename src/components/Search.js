
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchData, options } from '../utils/getData'




const Search = ({setSingleGame}) => {


    const [searchValue, setSearchValue] = useState('')


    const retrieveData = async () => {
        try {
            const res = await searchData(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${searchValue}`, options)
            setSingleGame(res);
        }
        catch(e) {
            console.error(e)
        }
       
    }

  
    


  return (
    <div>
        <div>Game Search</div>
        <form>
            <input 
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
          
            />
        </form>
        <FontAwesomeIcon 
            icon={faSearch}
            onClick={retrieveData}
        />
       
    </div>
   
  )
}

export default Search