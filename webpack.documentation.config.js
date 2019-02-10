const path = require('path');
const marked = require('marked');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const portNumber = 4002;


module.exports = {
  devServer: {
    publicPath: '/',
    port: portNumber,
    hot: true
  },
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src/docs/entry.js')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.md/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/docs')
  },
  optimization:{
    splitChunks:{
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist/docs', 'index.html'),
      template: path.join(__dirname, 'src/docs', 'design.html'),
      inject: true,
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
        "@pages": path.join( __dirname, 'src/docs/pages/' )
    },
    extensions: ['.js', '.css', '.styl', '.vue']
  }
}