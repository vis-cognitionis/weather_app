import * as React from 'react';
import { StatusBar } from 'react-native';

import NavigationStacks from 'navigation/rootNavigation';
import { useMainStore } from 'store/useMainStore';
import { Providers } from 'hooks/providers';
import { SplashScreen } from 'screens/splashScreen/splashScreen';

const App = () => {
  const [initializationStep, setInitializationStep] = React.useState<number>(0);
  const setShowSplashScreen = useMainStore((state) => state.setShowSplashScreen);
  const setNavigateLanding = useMainStore((state) => state.setNavigateLanding);

  const completeInitialization = React.useCallback(() => setInitializationStep(2), []);

  React.useEffect(() => {
    let isAppMounted = true;

    const runInitialization = async () => {
      try {
        await new Promise((resolve) => setTimeout(() => resolve(undefined), 3000));

        if (isAppMounted) {
          setShowSplashScreen(false);
          setNavigateLanding(true);

          completeInitialization();
        }
      } catch (error) {
        console.error('App initialization error:', error);
        if (isAppMounted) {
          completeInitialization();
        }
      }
    };

    runInitialization();

    return () => {
      isAppMounted = false;
    };
  }, [completeInitialization, setShowSplashScreen, setNavigateLanding]);

  if (initializationStep < 2) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar hidden={true} />
      <Providers>
        <NavigationStacks />
      </Providers>
    </>
  );
};

export default App;
