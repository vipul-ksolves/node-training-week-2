const pool = require("../db");

const signUpUser = async (req, reply) => {
  try {
    const { user_name, email, password } = req.body;
    //check if blog already exixt
    pool.query(
      "SELECT s FROM users s WHERE s.body = $1",
      [body],
      (err, result) => {
        if (err) throw err;
        if (result.rows.length) {
          reply.status(500).send({ message: "Blog already exist !!" });
        }
      }
    );

    // add user to db
    pool.query(
      "INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3)",
      [user_name, email, password],
      (err, result) => {
        if (err) throw err;
        reply.status(201).send("Student Created succesfull !!");
      }
    );
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
};

module.exports = { signUpUser };
