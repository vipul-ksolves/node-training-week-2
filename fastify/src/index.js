const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

const blogController = require("../src/controller/blogController");

// Routes
fastify.get("/", (req, reply) => {
  reply.send("Base url");
});

fastify.post("/api/blog", blogController.addBlog);
fastify.get("/api/blogs", blogController.getBlogs);
fastify.get("/api/blog/:id", blogController.getBlogById);
fastify.put("/api/blog/:id", blogController.updateBlog);
fastify.delete("/api/blog/:id", blogController.delateBlogbyId);

const PORT = 3333;

const start = async () => {
  try {
    await fastify.listen(PORT, () => {
      fastify.log.info(`Server is runnig port ${PORT}`);
    });
  } catch (error) {
    fastify.log.error(error);
  }
};
start();

// fastify.listen(PORT, () => {
//   fastify.log.info(`Server is runnig port ${PORT}`);
// });
