const { name, version, author } = require('./package');

const banner = `/**
 * ${name} v${version}
 * (c) 2020-present ${author.name} <${author.email}>
 * https://github.com/${author.name}/${name}
 * Released under the MIT License.
 */
`;

module.exports = {
  banner,
  output: {
    fileName: (context, defaultFileName) => {
      if (context.format === 'umd' || context.format === 'umd-min') {
        return `${name}[min].js`;
      }
      return `${name}.[format].js`;
    },
    moduleName: `${name}`,
    format: [
      'cjs',
      'es',
      'umd',
      'umd-min',
    ],
  },
  plugins: {
    commonjs: true,
    vue: {
      css: false,
    },
  },
  bundleNodeModules: true,
};