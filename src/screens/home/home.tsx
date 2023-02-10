import React, { useCallback, useEffect, useState } from "react";
import {
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
import ThemeProps from "../../core/init/themes/interface/interfaces";
import { useActiveTab } from "../../navigation/custom-hook/tab_context";

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

const Home = () => {
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
      {/* <ActionBar route={route} navigation={navigation} /> */}
    </SafeAreaView>
  );
};

export default Home;
