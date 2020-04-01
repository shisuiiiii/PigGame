export default {
  input: 'src/app.js',
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
  ]
};
