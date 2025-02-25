import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import {fetchPopularMovies,fetchSearchedMovies,} from "../services/apiService";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      if (searchQuery.trim() === "") {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } else {
        const searchedMovies = await fetchSearchedMovies(searchQuery);
        setMovies(searchedMovies);
      }
    };

    getMovies();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery.trim());
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home p-6 bg-zinc-800 w-full min-h-screen text-white">
      <form
        onSubmit={handleSearch}
        className="search-form mb-8 flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input p-3 border-none  rounded-l-lg w-full max-w-md text-white"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>

      <h2 className="text-3xl font-bold mb-4">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "Most Popular Movies"}
      </h2>

      <div className="movies-grid grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <p className="text-center col-span-full">No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
