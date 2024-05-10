import { createRating } from "../store/rating.store.js";

export const createRatingService = async (mid, uid, rating) => {
  try {
    return await createRating(mid, uid, rating);
  } catch (error) {
    throw Error(error);
  }
};
