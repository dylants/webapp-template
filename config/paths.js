const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appHtml: resolveApp('src/server/views/index.html'),
  appIndexJs: resolveApp('src/client/index.js'),
  appSrc: resolveApp('src'),
  servedPath: '/',
};
