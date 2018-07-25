const config = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    // redirects all 404s to ./dist/index.html
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;