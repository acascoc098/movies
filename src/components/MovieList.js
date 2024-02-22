import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieProvider";
import Movie from "./Movie";

const MovieList = ({onDeleteMovie}) => {

    const {movies} = useContext(MovieContext);

    console.log(movies + "@")
    return(
        <div className="listaM">
            {
                movies.map((movie) => {
                   return(<Movie movie={movie} key={movie.id} onDeleteMovie={onDeleteMovie}/>);
                })
            }
        </div>
    );
}

export default MovieList;