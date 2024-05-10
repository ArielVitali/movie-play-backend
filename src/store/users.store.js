import UsersDao from "../dao/Users.dao.js";

const userDao = new UsersDao();

const getUserById = async (id) => {
  try {
    return await userDao.getUserById(id);
  } catch (error) {
    throw Error(error);
  }
};
const updateUserById = async (id, name, avatar) => {
  try {
    return await userDao.updateUser(id, name, avatar);
  } catch (error) {
    throw Error(error);
  }
};
const deleteUserById = async (id) => {
  try {
    return await userDao.deleteUser(id);
  } catch (error) {
    throw Error(error);
  }
};

export { getUserById, updateUserById, deleteUserById };
