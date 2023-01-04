"use strict";

var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./src/api/routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.get("/", (req, res) => {
  res.json('Server runing');
});
// app.use("/blogs", router);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is runnig post ${PORT}`);
});