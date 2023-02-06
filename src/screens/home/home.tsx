import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useTheme } from "../../core/init/themes/theme_context";

import { ScreenNavigationProps } from "../../navigation/interfaces/interfaces";
import ThemeProps from "../../core/init/themes/interface/interfaces";
import AppBar from "./components/app-bar/app_bar";
import ActionBar from "./components/action-bar/action_bar";

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

const Home = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

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

        {/* <Button
          title={"GO TO LANDING"}
          onPress={() =>
            navigation.navigate(StackScreenNames.Landing, {
              name: StackScreenNames.Landing,
              path: StackScreenNames.Landing.toLowerCase(),
            })
          }
        /> */}
      </ScrollView>
      <ActionBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
