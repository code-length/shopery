const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.join(__dirname, '../../libs/ui/ui-shared/src/styles'),
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '../../libs/ui/ui-shared/src/styles')],
    prependData: `@use "variables" as *;`,
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
