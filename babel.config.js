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
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          services: './src/services',
          hooks: './src/hooks',
          types: './src/types',
          inits: './src/inits',
          store: './src/store',
          providers: './src/providers',
          themes: './src/themes',
          i18n: './src/i18n',
        },
      },
    ],
  ],
};
