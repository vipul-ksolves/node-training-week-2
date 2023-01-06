const blogController = require("../controller/blogController");

const blogRouter = async (fastify) => {
  fastify.post("/api/blog", blogController.addBlog);
  fastify.get(
    "/api/blogs",
    { preValidation: [fastify.authenticate] },
    blogController.getBlogs
  );
  fastify.get("/api/blog/:id", blogController.getBlogById);
  fastify.put("/api/blog/:id", blogController.updateBlog);
  fastify.delete("/api/blog/:id", blogController.delateBlogbyId);
};

module.exports = blogRouter;
