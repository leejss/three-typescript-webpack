const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/client/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", "..."],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../dist/client"),
  },
};
