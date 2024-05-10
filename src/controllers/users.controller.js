import RouterClass from "../router/router.class.js";
import { getUser, updateUser, deleteUser } from "../services/users.service.js";

class UsersController extends RouterClass {
  init() {
    this.get("/:id", ["PUBLIC"], async (req, res) => {
      try {
        const id = req.params.id;
        const response = await getUser(id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.put("/:id", ["PUBLIC"], (req, res) => {
      try {
        const id = req.params.id;
        const { name, avatar } = req.body;
        const response = updateUser(id, name, avatar);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.delete("/:id", ["PUBLIC"], (req, res) => {
      try {
        const id = req.params.id;
        const response = deleteUser(id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default UsersController;
