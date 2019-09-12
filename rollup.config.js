import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import node from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

import fs from 'fs';

const baseFolder = './src/';
const componentFolder = 'components/';

const components = fs.readdirSync(baseFolder + componentFolder);

const mapEntry = (f, ext, folder) => ({
  input: baseFolder + folder + f,
  external: ['vue'],
  output: {
    format: 'esm',
    file: `dist/${folder}${f.replace(ext, 'js')}`
  },
  plugins: [
    replace({ 'process.env.NODE_ENV': 'production' }),
    node({
      extensions: ['.vue', '.js']
    }),
    cjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      objectAssign: true
    })
  ]
});

export default [
  ...components.map(f => mapEntry(f, 'vue', componentFolder)),
  {
    input: 'src/index.js',
    external: ['vue'],
    output: [
      {
        format: 'cjs',
        file: 'dist/vue-leon.cjs.js'
      }
    ],
    plugins: [
      replace({ 'process.env.NODE_ENV': 'production' }),
      node({
        extensions: ['.vue', '.js']
      }),
      cjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      buble({
        objectAssign: true
      })
    ]
  },
  {
    input: 'src/index.js',
    external: ['vue'],
    output: {
      format: 'umd',
      name: 'vue-leon',
      file: 'dist/vue-leon.min.js',
      globals: {
        vue: 'Vue',
        leon: 'leon'
      }
    },
    plugins: [
      replace({ 'process.env.NODE_ENV': 'production' }),
      node({
        extensions: ['.vue', '.js']
      }),
      cjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      buble({
        objectAssign: true
      })
    ]
  }
];
