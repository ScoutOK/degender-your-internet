'use strict';

var webpack = require('webpack');

module.exports = {
  entry: {
    content: './content/main.jsx',
    analytics: './analytics/main.jsx',
    popup: './popup/main.jsx',
    processing: './text-processing/processing.js'
  },
  output: {
    path: __dirname,
    filename: './build/js/[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("./build/js/commons.chunk.js")
  ],
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
