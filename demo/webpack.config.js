const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'playground.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.png$/,
      loader: 'file-loader',
    }],
  },
};
