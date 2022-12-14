
import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchData, options } from '../utils/getData'
import { toast } from "react-toastify";




const Search = ({setSingleGame, setIsLoading}) => {


    const [searchValue, setSearchValue] = useState('')


    const retrieveData = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const res = await searchData(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${searchValue}`, options)   
            if (!res) {
                toast.error("Sorry, there is either no game with id or input format is incorrect. Must be a number.😅", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2500,
                  });
              return;
            } else {
          
                setIsLoading(false);
                setSingleGame(res);
            }
    }



  return (
    <div className='m-auto border-black max-w-screen-2xl flex flex-col items-center ' >
        <div>
            <h1 className='text-4xl font-bold uppercase my-5'>Game Searcher</h1>
        </div>
        <form className='mb-6'>
            <input 
                type="search"
                className='border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent '
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
          
            />
            <FontAwesomeIcon 
            icon={faSearch}
            onClick={(e) => retrieveData(e)}
            className='ml-3 text-lg cursor-pointer'
        />
        </form>
    
    </div>
   
  )
}

export default Search