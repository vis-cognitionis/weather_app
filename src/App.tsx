import React from "react";
import type { PropsWithChildren } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import {
  LanguageProvider,
  useLanguage,
} from "./core/init/lang/language_context";
import { t } from "./core/init/lang/custom-hook/use_translate";
import { darkStyles } from "./core/init/themes/dark";
import { lightStyles } from "./core/init/themes/light";
import {
  Theme,
  ThemeProvider,
  useTheme,
} from "./core/init/themes/theme_context";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      title={
        theme === Theme.Light
          ? "Switch to Dark Mode" + `${theme}`
          : "Switch to Light Mode" + `${theme}`
      }
      onPress={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}
    />
  );
};

const StyledText = () => {
  const { theme } = useTheme();

  const myStyles = theme === Theme.Light ? lightStyles : darkStyles;

  return <Text style={myStyles.text}>Hello World!</Text>;
};

const HomeScreen = () => {
  const { setLanguage } = useLanguage();

  return (
    <View>
      <Text>{t("home.welcome")}</Text>
      <Button title="Tr" onPress={() => setLanguage("tr")} />
      <Button title="Eng" onPress={() => setLanguage("en")} />
    </View>
  );
};

function BeforeApp(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <ThemeToggleButton />
          <Section title="Step One">
            Edit
            <StyledText />
            <HomeScreen></HomeScreen>
            <Text
              onPress={() => {
                console.log("girdi");
              }}
              style={styles.highlight}
            >
              App.tsx
            </Text>
            to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BeforeApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
