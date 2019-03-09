// a babel.config.js for project-wide configuration
// takes prescedence over file-relative configurations (i.e. .babelrc)
// see https://babeljs.io/docs/en/config-files

module.exports = function babelConfig(api) {
  // Cache the returned value forever and don't call this function again.
  api.cache.forever();
  return {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-default-from',
    ],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    test: ['src/'],
  };
};
