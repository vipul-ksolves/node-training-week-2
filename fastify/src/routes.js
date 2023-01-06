const blogController = require("../src/controller/blogController");

const Router = async (fastify) => {
  fastify.get("/", (req, reply) => {
    reply.status(200).send("Base url");
  });
  fastify.get("/demo", async (req, reply) => {
    reply.status(200).send("Demo Routes !!");
  });

  fastify.post("/api/blog", blogController.addBlog);
  fastify.get("/api/blogs", blogController.getBlogs);
  fastify.get("/api/blog/:id", blogController.getBlogById);
  fastify.put("/api/blog/:id", blogController.updateBlog);
  fastify.delete("/api/blog/:id", blogController.delateBlogbyId);
};
module.exports = Router;
