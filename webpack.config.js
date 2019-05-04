const HtmlWebPackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require("webpack");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const path = require('path');

module.exports = {
  module : {
    rules : [
      {
        test : /\.(js|html|jsx)$/,
        exclude : /node_modules/,
        use : "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new LodashModuleReplacementPlugin({
        'shorthands': true,
        'collections': true,
        'paths': true
    }),
    new webpack.ProvidePlugin({
         $: "jquery",
         _ : "lodash"
    })

  ]
}
