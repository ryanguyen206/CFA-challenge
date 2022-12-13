
import './App.css';
import {searchData, options} from './utils/getData'
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Home from './pages/Home';

function App() {

  const [gameID, setGameID] = useState('')

  return (
    <>
    <Home/>
    </>
  );
}

export default App;
