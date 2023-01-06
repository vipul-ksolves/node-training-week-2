const fastifyPlugin = require("fastify-plugin");

// Auth middleware decorater
const authMiddleware = fastifyPlugin(async (fastify) => {
  fastify.decorate("authenticate", async (req, reply) => {
    try {
      await req.jwtVerify();
    } catch (error) {
      reply.status(500).send(error.message);
    }
  });
});

module.exports = authMiddleware;
