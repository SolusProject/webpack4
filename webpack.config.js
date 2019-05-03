const HtmlWebPackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require("webpack");
//const path = require('path');

module.exports = {
  //"context" : path.resolve(__dirname, "src"),
  "module" : {
    "rules" : [
      {
        "test" : /\.(js|html|jsx)$/,
        "exclude" : /node_modules/,
        "use" : "babel-loader"
      },
      // {
      //   test: /\.json$/,
      //   loader: 'raw-loader'
      // },
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
         jQuery: "jquery",
         "window.jQuery": "jquery",
         _ : "lodash"
    })

  ]
}
