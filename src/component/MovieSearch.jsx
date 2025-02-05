// import { useEffect, useState } from "react";

// import { getData } from "../utils/services";
// import { useOnChangeHandler } from "../utils/hooks/useOnChangeHandler";
// import MovieCard from "./MovieCard";

// function MovieSearch() {

//     const [search, setSearch, onChangeHandlerSearch] = useOnChangeHandler('');
//     const [movie, setMovie] = useState({});

//     const getMovie = async(url) => {
//         try{
//             const response = await getData(url);
//             setMovie(response.data)
            
//         }
//         catch (error){
//             console.log(error);
            
//         }
//     }

//     const searchHandler = () => {
//         getMovie(`t=${search}`);
//         setSearch('');
//     }  

//     return ( 
//         <div className="serach-box flex flex-col">
//             <div className="flex flex-row">
//                 <div>
//                     <label
//                         className="mr-2" 
//                         htmlFor='title'>
//                         Title:
//                     </label>
//                     <input 
//                         type="text" 
//                         name="title"
//                         value={search}
//                         onChange={onChangeHandlerSearch}
//                             />
//                 </div>
//                 <div>
//                     <button
//                         onClick={searchHandler}
//                     >
//                         Search
//                     </button>
//                 </div> 
//             </div>
//             {
//                 !(Object.keys(movie).length === 0) &&
//                     <MovieCard movie={movie} />
//             }
//         </div>
//      );
// }

// export default MovieSearch;

// src/MovieSearch.js


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../utils/redux/features/movieSlice';

const MovieSearch = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const status = useSelector((state) => state.movie.status);
  const error = useSelector((state) => state.movie.error);

  const handleSearch = () => {
    if (title) {
      dispatch(fetchMovie(title));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {movie && (
        <div>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
