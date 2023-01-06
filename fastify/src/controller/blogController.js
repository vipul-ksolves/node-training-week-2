const pool = require("../db");

const addBlog = (req, reply) => {
  const { title, body, publishedat, category, issponsored, image } = req.body;

  //check if same body content already exixt
  pool.query(
    "SELECT s FROM blogs s WHERE s.body = $1",
    [body],
    (err, result) => {
      if (err) throw err;
      if (result.rows.length) {
        reply.status(500).send({ message: "Blog already exist !!" });
      }
    }
  );

  // add blog to db
  pool.query(
    "INSERT INTO blogs (title, body, publishedat, category, issponsored, image) VALUES ($1, $2, $3, $4, $5, $6)",
    [title, body, publishedat, category, issponsored, image],
    (err, result) => {
      if (err) throw err;
      reply.status(201).send("Student Created succesfull !!");
    }
  );
};

const getBlogs = (req, reply) => {
  pool.query("SELECT * FROM blogs ORDER BY id", (err, result) => {
    if (err) {
      throw err;
    }
    reply.status(200).send(result.rows);
  });
};

const getBlogById = (req, reply) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM blogs WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    const noBlogFound = !result.rows.length;
    if (noBlogFound) {
      reply.send("No Blog found !!");
    }
    reply.status(200).send(result.rows);
  });
};

const updateBlog = (req, reply) => {
  const id = parseInt(req.params.id);
  const { title, body, publishedat, category, issponsored, image } = req.body;
  pool.query("SELECT * FROM blogs WHERE id = $1", [id], (err, result) => {
    const noBlogFound = !result.rows.length;
    if (noBlogFound) {
      reply.send("No Blog found !!");
    }
  });

  pool.query(
    "UPDATE blogs SET title = $1, body = $2, publishedat = $3, category = $4, issponsored = $5, image = $6 WHERE id = $7",
    [title, body, publishedat, category, issponsored, image, id],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      reply.status(200).send("Blod Updated succesfully !!");
    }
  );
};

const delateBlogbyId = (req, reply) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM blogs WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }

    const noBlogFound = !result.rows.length;
    if (noBlogFound) {
      reply.send("No Blog found !!");
    }

    reply.status(200).send("Blog delated succesfuly !!");
  });
};

module.exports = { addBlog, getBlogs, getBlogById, updateBlog, delateBlogbyId };
