import {useCallback,useEffect,useMemo,useState} from 'react';
import movies from './data/movies.js';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import Filters from './components/Filters.jsx';
import MovieList from './components/MovieList.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import Favorites from './components/Favorites.jsx';

const initialFilters={genre:'all',year:'all',minRating:0,onlyFavorites:false};
function stored(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value??fallback;}catch{return fallback;}}
export default function App(){
 const [query,setQuery]=useState('');
 const [filters,setFilters]=useState(initialFilters);
 const [favorites,setFavorites]=useState(()=>{const saved=stored('cinescope-favorites',[]);return Array.isArray(saved)?saved.filter(id=>Number.isInteger(id)):[];});
 const [ratings,setRatings]=useState(()=>{const saved=stored('cinescope-ratings',{});return saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{};});
 const [selectedMovie,setSelectedMovie]=useState(null);
 const filteredMovies=useMemo(()=>movies.filter(movie=>movie.title.toLocaleLowerCase('es').includes(query.trim().toLocaleLowerCase('es'))&&(filters.genre==='all'||movie.genre===filters.genre)&&(filters.year==='all'||movie.year===Number(filters.year))&&movie.rating>=filters.minRating&&(!filters.onlyFavorites||favorites.includes(movie.id))),[query,filters,favorites]);
 useEffect(()=>{localStorage.setItem('cinescope-favorites',JSON.stringify(favorites));},[favorites]);
 useEffect(()=>{localStorage.setItem('cinescope-ratings',JSON.stringify(ratings));},[ratings]);
 const toggleFavorite=(id)=>setFavorites(prev=>prev.includes(id)?prev.filter(item=>item!==id):[...prev,id]);
 const rateMovie=(id,stars)=>setRatings(prev=>({...prev,[id]:stars}));
 const reset=()=>{setQuery('');setFilters(initialFilters);};
 const closeDetail=useCallback(()=>setSelectedMovie(null),[]);
 const showFavorites=()=>{setFilters(prev=>({...prev,onlyFavorites:true}));};
 return <>
  <Header count={movies.length} favoritesCount={favorites.length} onShowAll={reset} onShowFavorites={showFavorites} showOnlyFavorites={filters.onlyFavorites}/>
  <main className="shell">
   <div className="page-heading"><h1>Catálogo de películas</h1><p>Busca películas, guarda tus favoritas y califícalas.</p></div>
   <div className="search-section"><SearchBar query={query} onQueryChange={setQuery}/><Filters movies={movies} filters={filters} onChange={setFilters} onReset={reset}/></div>
   <div className="section-heading"><h2>{filters.onlyFavorites?'Mis películas favoritas':'Películas disponibles'}</h2><Favorites favoritesCount={favorites.length} onlyFavorites={filters.onlyFavorites} onToggle={()=>setFilters(prev=>({...prev,onlyFavorites:!prev.onlyFavorites}))}/></div>
   <p className="results-heading">{filteredMovies.length} {filteredMovies.length===1?'película encontrada':'películas encontradas'}</p>
   <MovieList movies={filteredMovies} favorites={favorites} ratings={ratings} onToggleFavorite={toggleFavorite} onSelect={setSelectedMovie} onRate={rateMovie} onReset={reset}/>
  </main>
  <footer>Laboratorio de Diseño Web · React</footer>
  {selectedMovie&&<MovieDetail movie={selectedMovie} isFavorite={favorites.includes(selectedMovie.id)} userRating={ratings[selectedMovie.id]||0} onClose={closeDetail} onToggleFavorite={toggleFavorite} onRate={rateMovie}/>}
 </>;
}
