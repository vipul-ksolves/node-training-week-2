const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

const Router = require("../src/routes");

// Routes
fastify.register(Router);

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
