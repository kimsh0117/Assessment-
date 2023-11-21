const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.ts`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "public/index.html"})
  ],
  resolve: {
    extensions: [".js",".ts"]
  }
}