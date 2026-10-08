export default function Favorites({favoritesCount,onlyFavorites,onToggle}) {
 return <button type="button" className={`favorites-shortcut ${onlyFavorites?'selected':''}`} onClick={onToggle} aria-pressed={onlyFavorites}><span>♥</span> {onlyFavorites?'Viendo favoritos':'Ver solo favoritas'} <span className="shortcut-count">{favoritesCount}</span></button>;
}
