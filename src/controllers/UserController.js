import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email, created_at } = user;
      return res.status(201).json({ id, nome, email, created_at });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(404).json(null);
    }
  }

  async show(req, res) {
    try {
      const { userId } = req.params;
      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }
      const user = await User.findByPk(userId);
      const { id, nome, email } = user;
      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }
      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json("User not found");
    }
  }

  async update(req, res) {
    try {
      const userId = req.userId;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      const newData = await user.update(req.body);
      const { id, nome, email, updated_at } = newData;

      return res.status(200).json({ id, nome, email, updated_at });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const userId = req.userId;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      await user.destroy();
      return res.status(204).json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
