import RatingDao from "../dao/Rating.dao.js";

const ratingDao = new RatingDao();

const createRating = async (mid, uid, rating) => {
  try {
    return await ratingDao.createRating(mid, uid, rating);
  } catch (error) {
    throw Error(error);
  }
};

export { createRating };
