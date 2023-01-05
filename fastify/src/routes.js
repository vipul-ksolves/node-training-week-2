const blogController = require("./controller/blogController");

const routes = [
  {
    method: "GET",
    url: "/blogs",
    handler: blogController.getBlogs,
  },
];

module.exports = routes;
