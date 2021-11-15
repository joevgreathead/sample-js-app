const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    // This forces the page to fall back to / when a 404 occurs
    // which mimics how our backend server would be set up to
    // proxy requests from /some-path to / while using React routing
    historyApiFallback: true,
    hot: true,
  },
  entry: {
    app: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    clean: true,
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
};
