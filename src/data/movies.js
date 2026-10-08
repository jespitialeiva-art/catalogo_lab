// Para cambiar una película, edita su título, género, año, calificación,
// imagen, descripción, director y duración en la lista de abajo.
// IMPORTANTE: no repitas los id y deja al menos 10 películas.
// La imagen debe ser una URL directa (https://...jpg o .png).
// Ejemplo de película nueva:
// {id:13,title:'Mi película',genre:'Drama',year:2022,rating:8.0,image:'https://ejemplo.com/poster.jpg',description:'Resumen...',director:'Nombre',duration:'2 h'},
// Datos locales: la aplicación no utiliza backend ni requiere claves API.
// Imágenes alojadas por TMDB; si fallan, se muestra un póster de respaldo.
const movies = [
  {id:1,title:'Interstellar',genre:'Ciencia ficción',year:2014,rating:8.7,image:'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',description:'Un grupo de astronautas viaja más allá de nuestra galaxia en busca de un nuevo hogar para la humanidad.',director:'Christopher Nolan',duration:'2 h 49 min'},
  {id:2,title:'El origen',genre:'Ciencia ficción',year:2010,rating:8.8,image:'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',description:'Un ladrón especializado en extraer secretos de los sueños recibe la misión de implantar una idea.',director:'Christopher Nolan',duration:'2 h 28 min'},
  {id:3,title:'Parásitos',genre:'Suspenso',year:2019,rating:8.5,image:'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',description:'Dos familias de clases sociales opuestas entrelazan sus vidas de manera imprevisible.',director:'Bong Joon-ho',duration:'2 h 12 min'},
  {id:4,title:'El caballero de la noche',genre:'Acción',year:2008,rating:9.0,image:'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',description:'Batman se enfrenta al Joker, un criminal que amenaza con sumir a Gotham en el caos.',director:'Christopher Nolan',duration:'2 h 32 min'},
  {id:5,title:'Coco',genre:'Animación',year:2017,rating:8.4,image:'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',description:'Miguel viaja a la Tierra de los Muertos para descubrir la historia y los secretos de su familia.',director:'Lee Unkrich y Adrian Molina',duration:'1 h 45 min'},
  {id:6,title:'La La Land',genre:'Romance',year:2016,rating:8.0,image:'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',description:'Una actriz y un músico persiguen sus sueños mientras se enamoran en Los Ángeles.',director:'Damien Chazelle',duration:'2 h 8 min'},
  {id:7,title:'Spider-Man: Un nuevo universo',genre:'Animación',year:2018,rating:8.4,image:'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',description:'Miles Morales descubre que no es el único Spider-Man y aprende a convertirse en héroe.',director:'Bob Persichetti, Peter Ramsey y Rodney Rothman',duration:'1 h 57 min'},
  {id:8,title:'Whiplash',genre:'Drama',year:2014,rating:8.5,image:'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',description:'Un joven baterista se enfrenta a las exigencias extremas de su profesor en un conservatorio de música.',director:'Damien Chazelle',duration:'1 h 46 min'},
  // Películas de anime elegidas para el catálogo.
  {id:9,title:'Re:Zero – Memory Snow',genre:'Animación',year:2018,rating:7.4,image:'/images/rezero-memory-snow.png',description:'Subaru prepara una salida especial con Emilia, pero una inesperada ola de frío altera los planes de todos en la mansión.',director:'Masaharu Watanabe',duration:'1 h'},
  {id:10,title:'KonoSuba: Legend of Crimson',genre:'Comedia',year:2019,rating:8.0,image:'/images/konosuba-legend-of-crimson.png',description:'Kazuma, Aqua, Megumin y Darkness viajan a la aldea de los demonios carmesí cuando Yunyun pide ayuda para enfrentar una amenaza que pone en peligro a su pueblo.',director:'Takaomi Kanasaki',duration:'1 h 30 min'},
  {id:11,title:'Una voz silenciosa',genre:'Drama',year:2016,rating:8.1,image:'https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg',description:'Un joven intenta reparar el daño que causó a una compañera sorda durante su infancia y encontrar una forma de reconciliarse.',director:'Naoko Yamada',duration:'2 h 10 min'},
  {id:12,title:'Your Name',genre:'Romance',year:2016,rating:8.4,image:'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg',description:'Dos adolescentes que viven en lugares diferentes descubren que intercambian sus cuerpos y forman un vínculo extraordinario.',director:'Makoto Shinkai',duration:'1 h 46 min'}
];
export default movies;
