import MovieDao from "../dao/Movies.dao.js";

const movieDao = new MovieDao();

const getAllMovies = async () => {
  try {
    return await movieDao.getMovies();
  } catch (error) {
    throw Error(error);
  }
};

const getMovieById = async (id) => {
  try {
    return await movieDao.getMovieById(id);
  } catch (error) {
    throw Error(error);
  }
};

export { getAllMovies, getMovieById };
