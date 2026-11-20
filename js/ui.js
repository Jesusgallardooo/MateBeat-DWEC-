export function obtenerGenero(generos, generoId){
    for (const genero of generos){
        if (genero.id === generoId){
            return genero.nombre;
        }
    }
    return 'Género desconocido';
}

export function limpiar(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

export function pintarListaPlaylists(contenedor, playlists, generos) {
    limpiar(contenedor);

    for (const playlist of playlists) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta-playlist';

        const info = document.createElement('div');

        const titulo = document.createElement('h3');
        titulo.textContent = playlist.titulo;

        const detalle = document.createElement('p');

        const autor = document.createElement('strong');
        autor.textContent = playlist.creador;

        detalle.append(
                'Por ', autor,` - ${playlist.numCanciones} canciones (${playlist.duracion})`
            );

        info.appendChild(titulo);
        info.appendChild(detalle);

        const genero = document.createElement('span');
        genero.className = 'badge-genero';
        genero.textContent = obtenerGenero(generos, playlist.generoId);

        tarjeta.appendChild(info);
        tarjeta.appendChild(genero);
        contenedor.appendChild(tarjeta);
    }
}