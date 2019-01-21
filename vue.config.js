// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const routes = require('./data');

module.exports = {
  lintOnSave: 'error'
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSPAPlugin({
  //       // Required - The path to the webpack-outputted app to prerender.
  //       staticDir: path.join(__dirname, 'dist'),
  //       // Required - Routes to render.
  //       routes: ['/', '/about'].concat(routes)
  //     })
  //   ]
  // }
};
