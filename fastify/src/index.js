//import packages
const fastify = require("fastify")({
  logger: true,
});
const jwt = require("@fastify/jwt");
const cors = require("@fastify/cors");
/**
 * Works as a body-parser for request body
 */
fastify.addContentTypeParser(
  "application/json",
  { parseAs: "string" },
  (req, body, done) => {
    try {
      const json = JSON.parse(body);
      done(null, json);
    } catch (err) {
      err.statusCode = 400;
      done(err, undefined);
    }
  }
);

//import files
const authRouter = require("../src/router/authRouter");
const blogRouter = require("./router/blogRouter");

//JWT
fastify.register(jwt, { secret: "supersecret" });

// Middleware
// await fastify.register(cors());

fastify.register(cors, {
  origin: "*",
});

const authMiddleware = require("../src/middleware/authMiddleware");
fastify.register(authMiddleware);

// Routes
fastify.get("/", async (req, reply) => {
  reply.status(200).send("Base url !!");
});
fastify.get("/demo", async (req, reply) => {
  reply.status(200).send("Demo Routes !!");
});

fastify.register(blogRouter);
fastify.register(authRouter);

// Creating server
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
