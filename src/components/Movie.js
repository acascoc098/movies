import { deleteMovie } from "../api/MovieApi";

const Movie = ({movie, onDeleteMovie}) => {

    const delMovie = async () => {
        const response = await deleteMovie(movie);
        console.log(response)
        if (response === 200) {
          onDeleteMovie(movie);
        }
      }


    return (
        <div className="MovieContainer">
            <h1 className="MovieTitle">{movie.title}</h1>
            <p className="description">Descripción: {movie.description}</p>
            <p className="year">Año: {movie.year}</p>
            <img className="cover" src={movie.cover} alt={movie.title} width={"200px"} height={"300px"}/><br></br>

            <button onClick={delMovie}>Borrar película</button>
        </div>
    )
}

export default Movie;