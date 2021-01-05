/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@components': './src/components',
    '@utils': './src/utils/',
    '@types': './src/types.ts',
  },

  // Trying experimental feature; snowpack@next
  // experiments: {
  //   source: 'skypack'
  // }
}
