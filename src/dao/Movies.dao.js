class MovieDao {
  constructor() {}

  async getMovies() {
    try {
      const movies = await db.query(`SELECT * FROM movies`);
      return movies.rows;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getMovieById(id) {
    try {
      const movie = await db.query(`SELECT * FROM movies WHERE id = $1`, [id]);
      return movie.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default MovieDao;
