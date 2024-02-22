
export const deleteMovie = async (movie) => {
    const response = await fetch("http://localhost:3001/movies/" + movie.id,{
        method: "DELETE"
    });

    if (response.status === 200) {
        console.log("DELETE: Película borrada correctamente");
        return response.status;
    } else {
        console.log("ERROR: No se ha podido borrar la película");
    }
}

export const postMovie = async (movie) => {
    try {
        const response = await fetch("http://localhost:3001/movies/", {
           method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(movie)
        });
        if (response.status === 201) {
            return response.status;
        }
    } catch(e) {
        console.log("ERROR")
    }
    
}

export const getMovie = async (movieId) => {
    try {
        const response = await fetch("http://localhost:3001/movies/" + movieId);
        if (response.status === 200) {
            return await response.json();
        } else {
            console.log("ERROR: No se ha podido encontrar la película")
        }
    } catch(e) {
        console.log("ERROR: No se ha podido conectar con el servidor")
    }
}