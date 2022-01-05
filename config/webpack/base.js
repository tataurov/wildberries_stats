const
  webpack = require('webpack'),
  { webpackConfig, merge } = require('@rails/webpacker');

module.exports = merge(webpackConfig,
  {
    plugins: [
      new webpack.ProvidePlugin({
        React: ['react'],
        _: ['lodash'],
        process: 'process/browser',
      })
    ]
  }
);
