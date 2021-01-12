import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      name: 'lighting-editor',
      format: 'umd',
      file: 'dist/lighting-editor.js',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ declaration: false }),
    resolve(),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // progress(),
    terser(),
    filesize(),
  ],
}
