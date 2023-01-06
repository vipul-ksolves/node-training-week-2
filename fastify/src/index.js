//import packages
const jwt = require("fastify-jwt");
const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

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
const blogRouter = require("./router/blogRouter");

//JWT
fastify.register(jwt, { secret: "supersecret" });

// Routes
fastify.get("/", (req, reply) => {
  reply.status(200).send("Base url !!");
});
fastify.get("/demo", async (req, reply) => {
  reply.status(200).send("Demo Routes !!");
});
fastify.register(blogRouter);

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
