import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "TU_API_KEY"; // ⚠️ Reemplázala con tu API Key de TMDB

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
