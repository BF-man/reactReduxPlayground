var path = require('path')
var glob = require('glob')
var extname = require('path-complete-extname')
var HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  entry: glob.sync(path.resolve('.', 'src', 'index.js')).reduce(
    function (map, entry) {
      var basename = path.basename(entry, extname(entry))
      map[basename] = entry
      return map
    }, {}
  ),

  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-import')({ skipDuplicates: true }),
                  require('postcss-cssnext')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'reactReduxPlayGround', template: path.resolve('src', 'index.ejs') })
  ],
  resolve: {
    extensions: [ '.js', '.coffee' ],
    modules: [
      // path.resolve('./src'),
      path.resolve('node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  }
}
