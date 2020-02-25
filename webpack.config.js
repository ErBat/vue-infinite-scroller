const path = require('path');

module.exports = {
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      { 
        test: /\.tsx?$/,
        exclude: [/node_modules/], 
        loader: "ts-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
};