module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          layouts: './src/layouts',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          services: './src/services',
          hooks: './src/hooks',
          types: './src/types',
          inits: './src/inits',
          store: './src/store',
          contexts: './src/contexts',
          providers: './src/providers',
          styles: './src/styles',
          themes: './src/themes',
        },
      },
    ],
  ],
};
