import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import html from 'rollup-plugin-html2';

export default {
  input: 'src/js/app.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      name: 'Piggie',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    html({
      template: 'src/index.html',
      fileName: 'app.html'
    })
  ]
};
