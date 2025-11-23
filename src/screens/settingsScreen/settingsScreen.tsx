import { useState } from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView, SectionList, View, Text, TouchableOpacity } from 'react-native';

import { useMainStore } from 'store/useMainStore';
import NetworkError from 'components/network-error/network_error';
import { useTheme, useTranslate } from 'hooks';
import { IconRadioChecked, IconRadioUnchecked } from 'components/icons/customIcons';
import CitySearchModal from 'components/city-search/city_search_modal';

import SectionContent from './components/section_content';
import NotificationInfo from './components/notification_info';
import { useWeatherDatas } from '../../services/queries/useWeatherDatas';
import SectionTitle from './components/section_title';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionListContainer: { paddingLeft: 60 },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingRight: 20,
  },
  addCityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

const Settings = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const networkError = useMainStore((state) => state.networkError);
  const showNotification = useMainStore((state) => state.showNotification);
  const savedCities = useMainStore((state) => state.savedCities);
  const city = useMainStore((state) => state.city);
  const setCity = useMainStore((state) => state.setCity);
  const setDefaultCity = useMainStore((state) => state.setDefaultCity);
  const removeCity = useMainStore((state) => state.removeCity);

  const [isModalVisible, setModalVisible] = useState(false);

  const { isLoading } = useWeatherDatas();

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setDefaultCity(selectedCity);
  };

  const renderCityItem = (cityName: string) => {
    const isSelected = city === cityName;
    return (
      <TouchableOpacity
        style={styles.cityRow}
        onPress={() => handleCitySelect(cityName)}
      >
        <Text style={[theme.typography.caption, { color: theme.palette.text?.primary, fontSize: 16 }]}>
          {cityName}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          {isSelected ? <IconRadioChecked /> : <IconRadioUnchecked />}
          {!isSelected && (
            <TouchableOpacity onPress={() => removeCity(cityName)}>
              <Text style={{ color: 'red', fontSize: 12 }}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const settings = [
    {
      title: 'Cities',
      data: [
        ...savedCities.map(c => ({ name: c, type: 'city' })),
        { name: 'add_city', type: 'add_button' }
      ],
    },
    {
      title: t('settings.general.title'),
      data: [
        { name: t('settings.general.language'), type: 'item' },
      ],
    },
    {
      title: t('settings.temperature.title'),
      data: [
        { name: t('settings.temperature.celsius'), type: 'item' },
        { name: t('settings.temperature.fahrenheit'), type: 'item' },
      ],
    },
    {
      title: '',
      data: [{ name: t('settings.terms'), type: 'item' }, { name: t('settings.about'), type: 'item' }],
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {networkError && <NetworkError />}
      {!networkError && (
        <>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <>
              {showNotification && <NotificationInfo />}
              <SectionList
                style={styles.sectionListContainer}
                sections={settings}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }: { item: { name: string; type: string } }) => {
                  if (item.type === 'city') {
                    return renderCityItem(item.name);
                  }
                  if (item.type === 'add_button') {
                    return (
                      <TouchableOpacity
                        style={styles.addCityButton}
                        onPress={() => setModalVisible(true)}
                      >
                        <Text style={[theme.typography.caption, { color: theme.palette.primary.main, fontSize: 16 }]}>
                          + {t('settings.addCity')}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                  return <SectionContent content={item.name} />;
                }}
                renderSectionHeader={({ section }) => <SectionTitle title={section.title} />}
              />
              <CitySearchModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};
export default Settings;
