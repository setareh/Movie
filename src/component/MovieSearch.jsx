import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../utils/redux/features/movieSlice";
import MovieCard from "./MovieCard";

const MovieSearch = () => {
  const [title, setTitle] = useState("");
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
      <div className="flex flex-row py-12">
        <input
          className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Enter movie title"
        ></input>

        <button
          onClick={handleSearch}
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {movie.length > 0 &&
        movie.map((item) => {
          return <MovieCard key={item.imdbID} movie={item} />;
        })}
    </div>
  );
};

export default MovieSearch;
