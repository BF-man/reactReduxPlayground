require('dotenv').config()
var webpack = require('webpack')
var merge = require('webpack-merge')

var config = require('./shared.js')
// remove it if you do not want to deploy to aws
var S3Plugin = require('webpack-s3-plugin')
//

module.exports = merge(config, {
  output: { filename: '[name]-[hash].js' },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      }
    }),
    // remove it if you do not want to deploy to aws
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
      },
      s3UploadOptions: {
        Bucket: process.env.AWS_BUCKET
      }
    }),
    //
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL_PRODUCTION),
      'process.env.GOOGLE_PLACES_API_KEY': JSON.stringify(process.env.GOOGLE_PLACES_API_KEY),
      'process.env.STRIPE_PUBLIC_KEY': JSON.stringify(process.env.STRIPE_PUBLIC_KEY)
    })
  ]
})
