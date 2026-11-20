import { generosMusicales, playlists } from './datos.js';
import { pintarListaPlaylists } from './ui.js';

const contenedor = document.querySelector("#listado-musica");
pintarListaPlaylists(contenedor,playlists,generosMusicales)