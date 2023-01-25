export default interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      h1: number;
      h2: number;
      h3: number;
      body: number;
    };
  };
  platform: {
    ios: {
      specificStyle: any;
    };
    android: {
      specificStyle: any;
    };
  };
}

const theme: Theme = {
  colors: {
    primary: '#ff00ff',
    secondary: '#00ffff',
    background: '#f5f5f5',
  },
  typography: {
    fontFamily: 'Arial',
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
