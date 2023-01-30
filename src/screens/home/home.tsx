import React, { useCallback, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useTheme } from "../../core/init/themes/theme_context";

import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
import { Language, useLanguage } from "../../core/init/lang/language_context";
import { t } from "../../core/init/lang/custom-hook/useTranslate";
import ThemeProps from "../../core/init/themes/interface/interfaces";
import AppBar from "./components/app-bar/app_bar";

const Home = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { setLanguage } = useLanguage();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <AppBar />

        <View style={{ flexDirection: "row" }}>
          <Button
            title="Tr"
            color={theme.palette.primary.main}
            onPress={() => setLanguage(Language.Turkish)}
          />
          <Button title="Eng" onPress={() => setLanguage(Language.English)} />
        </View>
        <Button
          title={t("navbar.nav")}
          onPress={() =>
            navigation.navigate(StackScreenNames.Splash, {
              name: StackScreenNames.Splash,
              path: StackScreenNames.Splash.toLowerCase(),
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    scrollView: {
      // flex: 1,
    },
  });
};
