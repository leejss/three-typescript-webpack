const webpackCommonConfig = require("./webpack.common");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
});
