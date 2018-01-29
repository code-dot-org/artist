const path = require("path");

module.exports = {
  entry: "./artist.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  }
};
