import {
  getUserById,
  updateUserById,
  deleteUserById,
} from "../store/users.store.js";

/**
 * Get a user by ID
 *
 * userId Integer
 * returns User
 **/
export const getUser = async (id) => {
  try {
    return await getUserById(id);
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Update a user
 *
 * body User
 * userId Integer
 * no response value expected for this operation
 **/
export const updateUser = async (id, name, avatar) => {
  try {
    return await updateUserById(id, name, avatar);
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Delete a user
 *
 * userId Integer
 * no response value expected for this operation
 **/
export const deleteUser = async (id) => {
  try {
    return await deleteUserById(id);
  } catch (error) {
    throw Error(error);
  }
};
