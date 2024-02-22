import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch("http://localhost:3001/movies");
        try {
            const movis = await response.json();
            setMovies(movis);
        } catch (error) {
            console.log("ERROR: no se han podigo cargar las películas")
        }
    }

    useEffect(() => {
        getMovies();
    },[])

    return (
        <MovieContext.Provider value={{movies,setMovies,getMovies}}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;