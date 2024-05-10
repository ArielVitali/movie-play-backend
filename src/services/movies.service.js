import { getAllMovies, getMovieById } from "../store/movies.store.js";

/**
 * Get a list of movies
 *
 * genre String  (optional)
 * search String  (optional)
 * orderBy String  (optional)
 * pagination String  (optional)
 * returns List
 **/
export const getMovies = async () => {
  try {
    return await getAllMovies();
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Get a movie by ID
 *
 * movieId Integer
 * returns Movie
 **/
export const getMovie = async (id) => {
  try {
    return await getMovieById(id);
  } catch (error) {
    throw Error(error);
  }
};
