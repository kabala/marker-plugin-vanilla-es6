var HtmlWebpackPlugin = require('html-webpack-plugin')
var path              = require('path')
var autoprefixer      = require('autoprefixer')
var fontMagician      = require('postcss-font-magician')
var rucksack          = require('rucksack-css')
var lost              = require('lost')

module.exports = {
  context: path.join(__dirname, '/app'),

  entry: './app.js',

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.pug$/,
        loader: 'pug-loader'
      },

      { test: /\.js$/,
        exclude: /(node_mdules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      },

      { test: /assets\*$/,
        loader: 'file-loader'
      },

      { test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              plugins: () => [autoprefixer, lost, rucksack, fontMagician]
            }
          }
        ]
      },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  // postcss: function () {
  //   return {
  //     plugins: [autoprefixer, precss, lost, rucksack, fontMagician]
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: path.join(__dirname, '/app/pug/index.pug'),
      title: 'Demo'
    })
  ]
}
