const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

const nextConfig = {
  nx: {
    svgr: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '../../libs/styles')],
    prependData: `@import "variables";`,
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
