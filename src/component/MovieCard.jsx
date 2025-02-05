import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../utils/redux/features/authSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.auth);

  const handleFavoriteChange = (value) => {
    dispatch(toggleFavorites(value));
  };

  const isFavorite = favorites?.some((fav) => fav.imdb === movie.imdbID);

  return (
    <div className="serach-result flex flex-row mb-6 bg-gray-900 p-6 rounded-s">
      <div className="mr-4">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="w-9/12">
        <h1 className="font-extrabold text-lg mb-2">
          {movie.Title} ({movie.Year})
        </h1>
        <div>
          <p>
            <strong>IMDb:</strong> {movie.imdbID}
          </p>
        </div>
      </div>
      <div className="w-3/12 text-right">
        <button
          onClick={() =>
            handleFavoriteChange({
              title: movie.Title,
              imdb: movie.imdbID,
            })
          }
          className="bg-red-700 hover:bg-red-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {/* {!isFavorite ? `+ favorite` : `- favorite`} */}
          favorite
        </button>
      </div>
    </div>
  );
}
