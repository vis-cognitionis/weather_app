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
