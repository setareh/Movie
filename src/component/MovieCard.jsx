import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className="serach-result flex flex-row">
        <div className='mr-4'>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
        <div>
            <h1 className='bold text-lg'>{movie.Title} ({movie.Year})</h1>
            <div>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                <p><strong>Runtime:</strong> {movie.Runtime}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
            </div>
        </div>
    </div>
  )
}
