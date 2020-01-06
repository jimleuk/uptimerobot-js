import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/uptimerobot.ts',
    output: {
      name: 'uptimerobot',
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
    },
    plugins: [
      builtins(), // see https://www.npmjs.com/package/rollup-plugin-node-builtins
      resolve(), // so Rollup can find our external packages
      commonjs(), // so Rollup can convert external packages ie. `axios` to an ES module
      json(), // required for axios
      typescript(),
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify 
  // `file` and `format` for each target)
  {
    input: 'src/uptimerobot.ts',
    external: ['axios', 'lodash', 'qs'],
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es', exports: 'named' }
    ],
    plugins: [
      builtins(), // see https://www.npmjs.com/package/rollup-plugin-node-builtins
      resolve(), // so Rollup can find our external packages
      commonjs(), // so Rollup can convert external packages ie. `axios` to an ES module
      json(), // required for axios
      typescript(),
    ]
  },
];