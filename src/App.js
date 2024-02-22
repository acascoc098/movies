import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ErrorComponent from './components/ErrorComponent';
import MovieList from './components/MovieList';
import { useContext } from 'react';
import { MovieContext } from './context/MovieProvider';
import Rating from './components/Rating';
import MovieFormValid from './components/MovieFormValid';
import MovieDetail from './components/MovieDetail';

function App() {
  const {movies,setMovies} = useContext(MovieContext);

  const onDeleteMovie = (deleteMovie) => {
    const newMovies = movies.filter((movie) => deleteMovie !== movie);
    setMovies(newMovies);
  }

  const onSaveMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to={"/"} className={"nav-link"}>INICIO</NavLink>
          <NavLink to={"/peliculas"} className={"nav-link"}>PELÍCULAS</NavLink>
          <NavLink to={"/nueva"} className={"nav-link"}>FORMUALRIO DE ALTA</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/peliculas' element={<MovieList onDeleteMovie={onDeleteMovie}/>}/>
          <Route path='/nueva' element={<MovieFormValid onSaveMovie={onSaveMovie}/>}/>
          <Route path='/movies/:id' element={<MovieDetail onDeleteMovie={onDeleteMovie}/>}/>
          <Route path='*' element={<ErrorComponent/>}/>
        </Routes>
        <Rating ratio={3}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
