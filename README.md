# CineScope — Catálogo interactivo de películas

Laboratorio de Diseño Web. Aplicación de React sin backend y con estilo sencillo.

## Cómo ejecutarlo

1. Abre esta carpeta en VS Code.
2. En la terminal ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre la dirección local que muestre Vite (normalmente `http://localhost:5173`).

Para verificar la compilación: `npm run build`.

## Funciones

- Lista de películas con imagen, título, género, año, calificación y descripción.
- Búsqueda inmediata por título.
- Filtros combinados de género, año, calificación mínima y favoritas.
- Detalles al hacer clic y botón para cerrarlos.
- Favoritos y valoración de 1 a 5 estrellas (guardados en el navegador mediante localStorage).
- Mensaje cuando no hay coincidencias.

## Cómo cambiar películas

Abre `src/data/movies.js`. Puedes modificar las películas existentes o reemplazarlas por otras.
Cada película tiene: `id`, `title`, `genre`, `year`, `rating`, `image`, `description`, `director`, `duration`.

Ejemplo:

```js
{id:13,title:'Nueva película',genre:'Comedia',year:2023,rating:7.8,
 image:'https://sitio.com/imagen.jpg',description:'Una historia...',
 director:'Nombre del director',duration:'1 h 45 min'},
```

**Consejos:** conserva al menos 10 películas, utiliza un `id` distinto en cada una, y separa los objetos con comas. La calificación general (`rating`) va de 0 a 10, mientras que las estrellas del usuario van de 1 a 5. Puedes añadir géneros y años nuevos: aparecen automáticamente en los filtros. Si sustituyes una película, es preferible asignarle un ID nuevo para que no herede las favoritas o estrellas que el navegador guardó de la película anterior.

## Estructura

- `src/App.jsx`: estados compartidos y combinación de filtros.
- `src/components/Header.jsx`: encabezado.
- `src/components/SearchBar.jsx`: buscador.
- `src/components/Filters.jsx`: filtros.
- `src/components/MovieList.jsx`: lista con `map()`.
- `src/components/MovieCard.jsx`: tarjeta y valoración.
- `src/components/MovieDetail.jsx`: detalle de película.
- `src/components/Favorites.jsx`: acceso a favoritas.
- `src/data/movies.js`: catálogo editable.
- `src/styles.css`: estilos sencillos.

## Entrega

Publica este proyecto en un repositorio de GitHub y entrega su enlace, junto con el README y una captura o enlace de la aplicación funcionando.

## Películas personalizadas

El catálogo incluye 12 títulos; entre ellos **Re:Zero – Memory Snow** (2018), **KonoSuba: Legend of Crimson** (2019), **Una voz silenciosa** (2016) y **Your Name** (2016).

Los pósteres de Re:Zero y KonoSuba están incluidos en `public/images/`, por lo que no necesitan conexión a un servidor de imágenes externo.
Los demás pósteres emplean enlaces de TMDB; si alguna imagen externa falla, la tarjeta muestra un mensaje de respaldo.

## Personalización visual

Edita `src/styles.css` para cambiar los colores y espacios. El diseño usa un fondo claro, acentos violetas y animaciones discretas.

## Lista de verificación del laboratorio

- [x] Mínimo 10 películas con todos los campos solicitados.
- [x] Componentes: App, Header, SearchBar, Filters, MovieList, MovieCard, MovieDetail y Favorites, en archivos separados.
- [x] Uso de `props`, `useState`, `map()`, `filter()` y renderizado condicional.
- [x] Búsqueda en tiempo real.
- [x] Filtros por género, año, calificación mínima y favoritos; funcionan combinados.
- [x] Detalles de películas que pueden abrirse y cerrarse.
- [x] Favoritos: agregar, quitar y mostrar solamente favoritas.
- [x] Valoración personal entre 1 y 5 estrellas.
- [x] Mensaje cuando no hay resultados.
- [x] Diseño adaptable a teléfono.
- [x] README con instrucciones.

**Pasos finales de entrega:** ejecutar el proyecto localmente, probar cada interacción, crear un repositorio en GitHub y entregar su enlace junto con una captura de pantalla de la aplicación funcionando. No incluye un repositorio remoto ni la captura.
