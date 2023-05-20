const path = require('path');
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '..');
const {presets, plugins} = require(`${appDirectory}/babel.config.js`);
const isProduction = process.env.NODE_ENV === 'production';

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
  // 'react-native-linear-gradient',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.js'), // Entry to your application
    path.resolve(appDirectory, 'App.tsx'), // Change this to your main App file
    path.resolve(appDirectory, 'src'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: [...plugins, 'react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esmodule: false,
    },
  },
};

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: [path.resolve(appDirectory, 'index.js')],
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'bundle.web.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-linear-gradient$': 'react-native-web-linear-gradient',
    },
  },
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      __DEV__: JSON.stringify(isProduction ? false : true),
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // Force `index.html` to be loaded for any route
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        // Don't force fullscreen overlay for warnings
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
};
