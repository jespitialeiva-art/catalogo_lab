export default function SearchBar({query,onQueryChange}) {
 return <label className="search-wrap"><span className="sr-only">Buscar por título</span><span aria-hidden="true" className="search-icon">⌕</span><input type="search" placeholder="Buscar películas por título..." value={query} onChange={e=>onQueryChange(e.target.value)}/>{query && <button className="clear-search" type="button" onClick={()=>onQueryChange('')} aria-label="Limpiar búsqueda">×</button>}</label>;
}
