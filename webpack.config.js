module.exports = {
  entry: './visualization.js',
  output: {
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
    }]
  },
};
