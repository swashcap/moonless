/* eslint-env node */
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  externals: [
    {
      '@babel/runtime': '@babel/runtime',
      react: 'react',
    },
    (context, request, callback) => {
      if (/^@babel\/runtime/.test(request)) {
        return callback(null, `commonjs ${request}`);
      }

      return callback();
    },
  ],
  mode,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: [/\.tsx?$/, /\.js$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        exclude: /\.module\.css$/,
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.node'],
  },
};
