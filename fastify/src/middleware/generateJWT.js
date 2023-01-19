module.exports = generatejwt((fastify) => {
  fastify.decorate("generatejwt", (req, reply) => {
    const { email, user_name } = req.body;
    try {
      fastify.jwt.sign({ email, user_name }, { expiresIn: 86400 });
      reply.send({ token, email });
    } catch (error) {
      console.log(error);
    }
  });
});
