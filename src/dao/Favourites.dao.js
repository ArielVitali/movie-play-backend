class FavouritesDao {
  constructor() {}

  async getFavoritesUserById(id) {
    try {
      const query = `SELECT * FROM favourites WHERE id = $1`;
      const result = await db.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw Error(error);
    }
  }

  async deleteFavouriteByUserId(id) {
    try {
      const query = `DELETE FROM favourites WHERE id = $1`;
      await db.query(query, [id]);
    } catch (error) {
      throw Error(error);
    }
  }
}

export default FavouritesDao;
