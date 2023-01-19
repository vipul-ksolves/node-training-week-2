const pool = require("../db");

const signUpUser = async (req, reply) => {
  const { email, user_name, password, conformPassword } = req.body;

  // if any of the fields is empty
  if (!email || !user_name || !password || !conformPassword) {
    return reply.send({
      message: "Mandatory fields is empty !!",
      status: "error",
    });
  }

  //if password is not matched
  if (password !== conformPassword) {
    return reply.send({
      message: "Password is not Matched !!",
      status: "error",
    });
  }

  //check if user already exist
  const { rows } = await pool.query(
    `SELECT email from users WHERE email = $1`,
    [email]
  );
  const isUserAlreadyExist = rows[0];

  if (isUserAlreadyExist) {
    return reply.send({ message: "User already exist !!", status: "error" });
  }

  // add user to db
  if (
    email &&
    user_name &&
    password &&
    isUserAlreadyExist !== email &&
    !isUserAlreadyExist
  ) {
    await pool.query(
      "INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3)",
      [user_name, email, password]
    );
    return reply.send({
      message: "User Created succesfull !!",
      user_name,
      email,
      status: "success",
    });
  }
};

// const signInUser = (req, reply) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     reply.status(400).send({ msg: "Mandatory failed is empty !!" });
//   }

//   //check if email & password matched
//   pool.query(
//     "SELECT s FROM users s WHERE s.email = $1 AND s.password = $2",
//     [email, password],
//     (err, result) => {
//       if (err) throw err;
//       if (result.rows.length) {
//         reply.send({ msg: "User Found !" });
//       }
//     }
//   );
// };

module.exports = { signUpUser };
