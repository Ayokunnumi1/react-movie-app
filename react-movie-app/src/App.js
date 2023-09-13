// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

// 71254d48
const API_URL = 'http://www.omdbapi.com?apikey=71254d48'
function App() {
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }

  useEffect(() => { searchMovies('spiderman') }, []);
  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder="Search for movies" value="spiderman"
        onChange={() => {}}>  
        </input>
        <img src={searchIcon}
          alt="search" onClick={() => {}}>
          
        </img>
      </div>
    </div>
  );
}

export default App;
