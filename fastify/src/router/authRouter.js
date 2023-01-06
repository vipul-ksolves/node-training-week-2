const authController = require("../controller/authController");

const authRouter = async (fastify) => {
  fastify.post("/api/user", authController.signUpUser);

  fastify.post("/api/auth", async (req, reply) => {
    try {
      const { email, user_name } = req.body;
      console.log(email, user_name);
      if (!email || !user_name) {
        reply.status(400).send({ msg: "Mandatory failed is empty !!" });
      }
      const token = fastify.jwt.sign(
        { email, user_name },
        { expiresIn: 86400 }
      );
      reply.send({ token, email });
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  });
};

module.exports = authRouter;
