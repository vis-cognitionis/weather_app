import { StyleSheet, View, Text, Pressable } from "react-native";

import { IconNoNetwork } from "src/core/components/icons/custom_icons";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";

const NetworkError = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      gap: 20,
    },
    icon: {
      marginBottom: 16,
    },
    message: {
      textAlign: "center",
    },

    refreshButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "gray",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    refreshText: {
      color: "white",
      marginLeft: 5,
    },
  });
  const refreshApp = () => {
    console.log("girdi");
  };

  return (
    <View style={styles.container}>
      <IconNoNetwork />
      <Text style={[theme.typography.content, styles.message]}>
        {t("error.noNetwork")}
      </Text>
      <Pressable
        onPress={() => {
          refreshApp();
        }}
      >
        <View style={styles.refreshButton}>
          <Text style={styles.refreshText}>Refresh</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default NetworkError;
