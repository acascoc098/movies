import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovie } from "../api/MovieApi";import Movie from "./Movie";

const MovieDetail = ({onDeleteMovie}) => {

    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
    const {movieId} = useParams();
    console.log(movieId);

    const downloadMovie = async (movieId) => {
        const response = await getMovie(movieId);
        if (!response.error) {
            setMovie(response);
            setError(false);
        }else{
            setError(true);
        }
    }

    useEffect(()=>{
        downloadMovie(movieId);
    }, [movieId]);
    console.log(movie.title);
    return(
        <div className="movie">
            <Movie movie={movie} onDeleteMovie={onDeleteMovie}/>
        </div>
    );
}

export default MovieDetail;