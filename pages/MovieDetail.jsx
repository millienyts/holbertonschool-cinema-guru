import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default MovieDetail;
