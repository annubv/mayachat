const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: path.resolve(__dirname, "src"),
  entry: [
    "./index.js",
    "./sass/root.scss",
    "./sass/nav.scss",
    "./sass/chat-content.scss",
  ],
  output: {
    path: path.resolve(__dirname, "client/assets/dist/"),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MinifyPlugin(
      {},
      {
        comment: false,
      }
    ),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
