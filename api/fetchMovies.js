import axios from "axios";
import config from "../config";

const { API_KEY } = config;

const fetchUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
const fetchNowPlayingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export {
  fetchUpcomingMovies,
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
};
