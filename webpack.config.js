const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "releases/dev"),
  },
  module: {
    rules: [{ test: /\.jsx$/, use: "babel-loader" }],
  },
};
