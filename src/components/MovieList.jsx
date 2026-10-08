import MovieCard from './MovieCard.jsx';
export default function MovieList({movies,favorites,ratings,onToggleFavorite,onSelect,onRate,onReset}) {
 if(!movies.length) return <div className="empty-state"><div className="empty-emoji">🎞️</div><h3>No encontramos películas</h3><p>Prueba con otro título o cambia los filtros para descubrir más historias.</p><button className="primary-button" onClick={onReset}>Mostrar todas las películas</button></div>;
 return <div className="movie-grid">{movies.map(movie=><MovieCard key={movie.id} movie={movie} isFavorite={favorites.includes(movie.id)} userRating={ratings[movie.id]||0} onToggleFavorite={onToggleFavorite} onSelect={onSelect} onRate={onRate}/>)}</div>;
}
