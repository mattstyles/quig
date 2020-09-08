
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'
// const babel = require('@rollup/plugin-babel')
// const terser = require('rollup-plugin-terser')
// const pkg = require('./package.json')

module.exports = {
  input: './index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    terser()
  ]
}
