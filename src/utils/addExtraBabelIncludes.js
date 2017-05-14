import { join } from 'path';

export default function (webpackConfig, paths, includes = []) {
  includes.forEach((include) => {
  	const extraPath = include.path;
    const loader = include.loader || 'babel';
    const test = include.test || /\.(js|jsx)$/;
    webpackConfig.module.loaders.push({
      test,
      include: join(paths.appDirectory, extraPath),
      loader,
    });
  });
  return webpackConfig;
}
