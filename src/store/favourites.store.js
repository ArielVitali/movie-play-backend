import FavouritesDao from "../DAO/Favourites.dao";

const favouriteDao = new FavouritesDao();

const getFavoritesUserById = async (id) => {
  try {
    return await favouriteDao.getFavoritesUserById(id);
  } catch (error) {
    throw Error(error);
  }
};

const deleteFavouriteByUserId = async (id) => {
  try {
    return await favouriteDao.deleteFavouriteByUserId(id);
  } catch (error) {
    throw Error(error);
  }
};

export { getFavoritesUserById, deleteFavouriteByUserId };
