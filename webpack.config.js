const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    home: "./src/views/home/index.js",
    about: "./src/views/about/index.js",
  },
  mode: "development",
  output: {
    clean: true,
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/views/home/template.html",
      filename: "index.html",
      chunks: ["app", "home"],
    }),
    new HtmlWebpackPlugin({
      template: "src/views/about/template.html",
      filename: "about.html",
      chunks: ["app", "about"],
    }),
  ],
};
