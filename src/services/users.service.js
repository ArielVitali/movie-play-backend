import { getUserById, updateUser, deleteUser } from "../store/users.store.js";

/**
 * Get a user by ID
 *
 * userId Integer
 * returns User
 **/
export const getUserById = async (id) => {
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
    return await updateUser(id, name, avatar);
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
    return await deleteUser(id);
  } catch (error) {
    throw Error(error);
  }
};
