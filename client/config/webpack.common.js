const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ["index.ts", ".ts", ".tsx", ".js"],
    plugins: [
      new TsConfigPathsPlugin({
        configFileName: path.resolve(__dirname, '../tsconfig.json'),
      })
    ]
    // alias: {
    //   Utilities: path.resolve(__dirname, 'src/utilities/'),
    //   Templates: path.resolve(__dirname, 'src/templates/')
    // }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }, {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: path.resolve(__dirname, '../tsconfig.json'),
          }
        }],

      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}

module.exports = config;

