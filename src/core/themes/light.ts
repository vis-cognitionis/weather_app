import Theme from './theme_interface';

const lightTheme: Theme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    background: '#f5f5f5',
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: {
      h1: 24,
      h2: 20,
      h3: 18,
      body: 14,
    },
  },
  platform: {
    ios: {
      specificStyle: {
        padding: 20,
        fontSize: 16,
      },
    },
    android: {
      specificStyle: {
        padding: 10,
        fontSize: 14,
      },
    },
  },
};

export default lightTheme;
