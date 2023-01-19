const authController = require("../controller/authController");
const pool = require("../db");

const authRouter = async (fastify) => {
  fastify.post("/api/auth/signup", authController.signUpUser);
  fastify.post("/api/auth/signin", async (req, reply) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return reply.send({
        message: "Mandatory failed is empty !!",
        status: "error",
      });
    }
    // `SELECT user_name from users WHERE email = '${email}'`

    const { rows } = await pool.query(
      `SELECT user_name from users WHERE email = $1`,
      [email]
    );

    //check if email & password matched
    const result = await pool.query(
      "SELECT s FROM users s WHERE s.email = $1 AND s.password = $2",
      [email, password]
    );

    if (result.rows.length) {
      const token = fastify.jwt.sign({ email, password }, { expiresIn: 86400 });
      return reply.status(200).send({
        ...rows[0],
        token,
        email,
        status: "success",
      });
    } else {
      return reply.send({
        message: "Email or password Mismatched !",
        err: err,
        status: "error",
      });
    }
  });
};

module.exports = authRouter;
