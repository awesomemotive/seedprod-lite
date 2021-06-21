webpack = require( 'webpack' );
const version = 'Lite';

module.exports = {
  outputDir: '/build/',
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: 'http://localhost:8083/',
  pages: {
    index: {

      // entry for the page
      entry: 'src/main.js',

      // the source template
      template: 'public/index.html',

      // output as dist/index.html
      filename: 'index.html',
    },
    admin: 'src/admin/main.js',
  },

  configureWebpack: config => {
    return {
      devtool: 'source-map',
      devServer: {
        allowedHosts: [
          'am.testing.seedprod.local.test',
        ],

        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
        },
        disableHostCheck: true,

      },
      plugins: [
        new webpack.NormalModuleReplacementPlugin( /(.*)-SP_VERSION(\.*)/, function( resource ) {
          resource.request = resource.request.replace( /-SP_VERSION/, `-${version}` );
        }),

      ],
    };
  },

};
