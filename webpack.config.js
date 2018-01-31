const path = require("path");

module.exports = {
  entry: "./playground.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.png$/,
      loader: 'file-loader',
    }],
  },
};
