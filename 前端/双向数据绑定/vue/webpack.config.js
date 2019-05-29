const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const domain = require("./src/domain");

const fileContent = fs.readFileSync('./package.json');
const packageJSON = JSON.parse(fileContent);
const dirPath = 'build/'+packageJSON.name;

let publicPath = domain.staticUrlPrefix;

module.exports =  {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, dirPath),
    publicPath: publicPath,
    filename: 'static/[name].js',
    chunkFilename:'static/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },{ 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },{ 
        test: /\.styl$/, 
        loader: 'style-loader!css-loader!stylus-loader' 
      },{ 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file-loader" 
      },{ 
        test: /\.(woff|woff2)$/, 
        loader:"url-loader?prefix=font/&limit=5000" 
      },{ 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
      },{ 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: 'build/user-portrait',
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    filename: 'static/[name].[chunkhash:8].js',
    disableHostCheck: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename : "index.html", //生成的html文件名
      template : "index.html", //生成html依赖的模板
      inject : true, //自动注入资源
      minify : { 
        removeComments : true,    //移除HTML中的注释
        collapseWhitespace : true    //删除空白符与换行符
      }
    })
  ]
}
if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ])
}else if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}