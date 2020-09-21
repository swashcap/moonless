import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import incstr from 'incstr';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const nextId = incstr.idGenerator({
  prefix: `ml`,
});
const ids = {};

const baseConfig = {
  external: ['react', 'react-dom', /@babel\/runtime.*/],
  input: './src/index.ts',
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.jsx', '.node', '.ts', '.tsx'],
      jail: path.join(__dirname, 'src'),
      modulesOnly: true,
    }),
    commonjs(),
    postcss({
      autoModules: false,
      extract: path.join(__dirname, 'dist/moonless.css'),
      minimize: true,
      modules: {
        generateScopedName(name, filename) {
          const key = `${filename}_${name}`;

          return ids[key] || (ids[key] = nextId());
        },
      },
    }),
  ],
};

export default [
  {
    ...baseConfig,
    output: {
      file: path.join(__dirname, 'dist/index.es6.js'),
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
      ...baseConfig.plugins,
    ],
  },
  {
    ...baseConfig,
    output: {
      file: path.join(__dirname, 'dist/index.esm.js'),
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          [
            '@babel/preset-env',
            { targets: { browsers: 'defaults', esmodules: true } },
          ],
        ],
      }),
      terser(),
      ...baseConfig.plugins,
    ],
  },
  {
    ...baseConfig,
    output: {
      file: path.join(__dirname, 'dist/index.cjs.js'),
      format: 'cjs',
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [['@babel/preset-env', { targets: { browsers: 'defaults' } }]],
      }),
      ...baseConfig.plugins,
    ],
  },
];
