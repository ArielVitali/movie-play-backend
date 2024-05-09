import {
  getFavoritesUserById,
  deleteFavouriteByUserId,
} from "../store/favourites.store.js";
/**
 * Get a user's favorite movies
 *
 * userId Integer
 * returns List
 **/
export const getFavoritesUserById = async (id) => {
  try {
    return await getFavoritesUserById(id);
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Delete a user's favorite movie
 *
 * userId Integer
 * returns any
 **/
export const deleteFavouriteByUserId = async (id) => {
  try {
    return await deleteFavouriteByUserId(id);
  } catch (error) {
    throw Error(error);
  }
};
