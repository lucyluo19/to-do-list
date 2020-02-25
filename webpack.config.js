// import path from 'path';
const path = require("path");
// export default {
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "app"), //root file run from
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, //file should or should not be compiled.
        loader: "babel-loader"
      }
    ]
  }
};
