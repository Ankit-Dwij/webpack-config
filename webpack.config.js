const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";

if ((process.env.NODE_ENV = "production")) {
  mode = "production";
}

module.exports = {
  mode: mode,

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: { extensions: [".js", ".jsx"] },

  devtool: "source-map",
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
