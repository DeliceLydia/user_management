const models = require("../database/models");

class User {
  static async createUser(req, res) {
    try {
      const user = await models.User.create(req.body);
      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const [updated] = await models.User.update(req.body, {
        where: { id: userId },
      });
      if (updated) {
        const updatedUser = await models.User.findOne({
          where: { id: userId },
        });
        return res.status(200).json({ user: updatedUser });
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = User;
