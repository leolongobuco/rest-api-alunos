import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
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
      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json("User not found");
    }
  }

  async update(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      const newUser = await user.update(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      await user.destroy();
      return res.status(204);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
