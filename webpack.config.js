const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'production',
  devtool: false,
  performance: {
    maxEntrypointSize: 750000, // 500 KiB로 설정 (필요에 따라 조정)
    maxAssetSize: 750000, // 500 KiB로 설정 (필요에 따라 조정)
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
        },
        parallel: true,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
      '...',
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 200000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    hot: true,
    host: 'localhost',
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|eot|woff|ttf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 디렉토리 경로에서 / 제거
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
    clean: true,
    assetModuleFilename: 'asset/[hash][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: true,
      excludeAssets: [/node_modules/],
      generateStatsFile: true,
    }),
  ],
};
