// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// 71254d48
const API_URL = 'http://www.omdbapi.com?apikey=71254d48'
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      return data;
    } catch (error) {
      return error;
    }
  }

  const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

  useEffect(() => { searchMovies('Batman') }, []);
  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
        }}>  
        </input>
        <img src={searchIcon}
          alt="search" onClick={() => {
            searchMovies(searchTerm);
          }}>
          </img>
      </div>

      {
        movies.length > 0 ?
          (
            <div className="container">
              {movies.map((movie) => {
                return (
                   <MovieCard movies={movie} />
                );
            })}
      </div>
          ) : (
            <div className= "empty">
              <h2>No movies found</h2>
            </div>
        )
  }
      
    </div>
  );
}

export default App;
