export const getMovies = async (req, res) => {
  try {
    const movies = await db.query(`SELECT * FROM movies`);
    res.json(movies.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await db.query(`SELECT * FROM movies WHERE id = $1`, [id]);
    res.json(movie.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
