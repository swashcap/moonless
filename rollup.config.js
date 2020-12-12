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
const generateScopedName = (name, filename) => {
  const key = `${filename}_${name}`;

  return ids[key] || (ids[key] = nextId());
};
const isProdEnv = process.env.NODE_ENV === 'production';

export default [
  {
    external: [
      'moonless-utils',
      'react',
      'react/jsx-runtime',
      'react-dom',
      /@babel\/runtime/,
    ],
    input: {
      index: path.join(__dirname, 'packages/components/src/index.ts'),
      moonless: path.join(__dirname, 'packages/components/src/moonless.css'),
    },
    output: {
      dir: path.join(__dirname, 'packages/components/dist'),
      entryFileNames(chunkInfo) {
        return chunkInfo.facadeModuleId.endsWith('.css')
          ? `${chunkInfo.name}.css`
          : `${chunkInfo.name}.es6.js`;
      },
      exports: 'auto',
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      isProdEnv && terser(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.jsx', '.node', '.ts', '.tsx'],
        jail: path.join(__dirname, 'packages/components/src'),
        modulesOnly: true,
      }),
      commonjs(),
      postcss({
        autoModules: false,
        extract: path.join(__dirname, 'packages/components/dist/moonless.css'),
        modules: { generateScopedName },
      }),
    ].filter(Boolean),
  },
  {
    external: [
      'moonless-utils',
      'react',
      'react/jsx-runtime',
      'react-dom',
      /@babel\/runtime/,
    ],
    input: {
      index: path.join(__dirname, 'packages/components/src/index.ts'),
      moonless: path.join(__dirname, 'packages/components/src/moonless.css'),
    },
    output: {
      dir: path.join(__dirname, 'packages/components/dist'),
      entryFileNames(chunkInfo) {
        return chunkInfo.facadeModuleId.endsWith('.css')
          ? `${chunkInfo.name}.css`
          : `${chunkInfo.name}.esm.js`;
      },
      exports: 'auto',
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [['@babel/preset-env', { targets: { browsers: 'defaults' } }]],
      }),
      isProdEnv && terser(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.jsx', '.node', '.ts', '.tsx'],
        jail: path.join(__dirname, 'packages/components/src'),
        modulesOnly: true,
      }),
      commonjs(),
      postcss({
        autoModules: false,
        extract: path.join(__dirname, 'packages/components/dist/moonless.css'),
        modules: { generateScopedName },
      }),
    ].filter(Boolean),
  },
  {
    external: ['react', /@babel\/runtime/],
    input: {
      index: path.join(__dirname, 'packages/utils/src/index.ts'),
    },
    output: {
      dir: path.join(__dirname, 'packages/utils/dist'),
      entryFileNames(chunkInfo) {
        return `${chunkInfo.name}.es6.js`;
      },
      exports: 'auto',
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      isProdEnv && terser(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.jsx', '.node', '.ts', '.tsx'],
        jail: path.join(__dirname, 'packages/utils/src'),
        modulesOnly: true,
      }),
      commonjs(),
    ].filter(Boolean),
  },
  {
    external: ['react', /@babel\/runtime/],
    input: {
      index: path.join(__dirname, 'packages/utils/src/index.ts'),
    },
    output: {
      dir: path.join(__dirname, 'packages/utils/dist'),
      entryFileNames(chunkInfo) {
        return `${chunkInfo.name}.esm.js`;
      },
      exports: 'auto',
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [['@babel/preset-env', { targets: { browsers: 'defaults' } }]],
      }),
      isProdEnv && terser(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.jsx', '.node', '.ts', '.tsx'],
        jail: path.join(__dirname, 'packages/utils/src'),
        modulesOnly: true,
      }),
      commonjs(),
    ].filter(Boolean),
  },
];
