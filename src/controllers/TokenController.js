import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ["Invalid credentials"] });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ errors: ["User doesn't exist"] });
      }

      const { id } = user;
      const passwordIsValid = await user.passwordIsValid(password);

      if (!passwordIsValid) {
        return res.status(404).json({ errors: ["Invalid password"] });
      }

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({ token });
    } catch (error) {
      return res.status(401).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }
}

export default new TokenController();
