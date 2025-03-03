import { useState, useEffect } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("popular").then(setMovies);
  }, []);

  return (
    <div>
      <SearchBar onSearch={(query) => fetchMovies(query).then(setMovies)} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
