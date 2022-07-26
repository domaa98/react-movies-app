import { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie'

const SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
function App() {
 
  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');
 
  const getMovies = (API) =>{
    fetch(API).then(res =>res.json()).then((res) =>{ 
      setMovies(res.results)});
  } 
  useEffect(() =>{
    getMovies(FEATURED_API)
  },[]);

  const handleOnSubmit = (e)=> {
    e.preventDefault();

   getMovies(SEARCH + searchTerm)

    setSearchTerm('');   
  }

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }

  return (
    <div className='movie-container'>
      
      <header>
      <form onSubmit={handleOnSubmit}>
        <input className='search' type="text" placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
        </form>
      </header>

      {movies.length>0 &&
        movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
        ))
      }

    </div>
  );
}

export default App;
