import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className="serach-result flex flex-row">
        <div>
            <img src={`${movie.Poster}`} />
        </div>
        <div>
            <h2>
                {movie.Title}
            </h2>
            <div>
                <span>
                    year:
                </span>
                <span>
                    19586546
                </span>
            </div>
        </div>
    </div>
  )
}
