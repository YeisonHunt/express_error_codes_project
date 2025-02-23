const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  target: 'node',
  entry: {
    main: isProd
      ? ['./src/main.ts']
      : ['@rspack/core/hot/poll?100', './src/main.ts'],
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                decorators: true,
              },
            },
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  externalsType: 'commonjs',
  plugins: [
    !isProd &&
      new RunScriptWebpackPlugin({
        name: 'main.js',
        autoRestart: false,
      }),
  ].filter(Boolean),
  devtool: 'eval-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};

module.exports = config;
