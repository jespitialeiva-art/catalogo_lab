export default function Header({count,favoritesCount,onShowAll,onShowFavorites,showOnlyFavorites}) {
 return <header className="site-header"><div className="nav shell">
  <button className="brand" onClick={onShowAll}>🎬 CineScope</button>
  <div className="nav-actions"><span>{count} películas</span><button className={showOnlyFavorites?'active':''} onClick={onShowFavorites}>♥ Favoritas ({favoritesCount})</button></div>
 </div></header>;
}
