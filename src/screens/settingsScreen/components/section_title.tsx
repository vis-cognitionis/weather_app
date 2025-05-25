import { View, Text } from 'react-native';

import { useTheme, useTranslate } from 'hooks';

const SectionTitle = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  return (
    <View
      style={{
        padding: 20,
        marginTop: title === t('settings.temperature.title') ? 20 : 0,
      }}
    >
      <Text style={theme.typography.title}>{title}</Text>
    </View>
  );
};

export default SectionTitle;
