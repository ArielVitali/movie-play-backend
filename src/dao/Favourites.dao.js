class FavouritesDao {
  constructor() {}

  async getFavoritesUserById(id) {
    const query = `SELECT * FROM favourites WHERE id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  async deleteFavouriteByUserId(id) {
    const query = `DELETE FROM favourites WHERE id = $1`;
    await db.query(query, [id]);
  }
}

export default FavouritesDao;
