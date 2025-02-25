import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={movie.url}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-400">Release Year: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
