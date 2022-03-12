const path = require('path');

module.exports = { 
  devtool: 'eval-source-map',
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
};