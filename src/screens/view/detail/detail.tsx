import React, { useCallback, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { observer } from 'mobx-react';

import ForecastFiveDay from './components/forecast_five_day';
import TemperatureChart from './components/temp_chart';
import NetworkError from '../common/components/network-error/network_error';
import Container from './components/container';
import mainStore from '../../../screens/view-model/main_store';
import { useTheme } from '../../../inits/themes/theme_context';
import { useTranslate } from '../../../inits/lang/custom-hook/useTranslate';
import { useWeatherDatas } from '../common/queries/useWeatherDatas';
import { useWeatherCurrent } from '../common/queries/useWeatherCurrent';
import { windowHeight, windowWidth } from '../common/constants/constants';

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8,
    columnGap: 10,
  },
});

const Detail = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const { refetch, isLoading } = useWeatherDatas();
  const { currentTemp, refetchCurrent } = useWeatherCurrent();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetch();
      refetchCurrent();
    }, 2000);
  }, []);

  const DetailCurrentInfos = [
    { title: t('detail.wind') },
    { title: t('detail.humidity') },
    { title: t('detail.pressure') },
    { title: t('detail.visibility') },
  ];

  const getDetailCurrentInfo = (info: { title: string }) => {
    switch (info.title) {
      case t('detail.wind'):
        return currentTemp?.wind.speed === undefined
          ? t('loading')
          : currentTemp?.wind.speed + ' ' + t('detail.windUnit');
      case t('detail.humidity'):
        return currentTemp?.main.humidity === undefined
          ? t('loading')
          : '%' + currentTemp?.main.humidity;
      case t('detail.pressure'):
        return currentTemp?.main.pressure === undefined
          ? t('loading')
          : currentTemp?.main.pressure + ' ' + 'hPa';
      case t('detail.visibility'):
        return Number.isNaN(Number(currentTemp?.visibility))
          ? t('loading')
          : Number(currentTemp?.visibility) / 1000 + ' ' + 'km';
      default:
        return t('loading');
    }
  };
  const DetailCurrent = () => {
    return (
      <View style={styles.grid}>
        {DetailCurrentInfos.map((info, index) => {
          return (
            <Container
              key={index}
              width={windowWidth <= 375 ? '100%' : '48%'}
              children={
                <Text style={[theme.typography.caption, { paddingLeft: 4 }]}>
                  {getDetailCurrentInfo(info)}
                </Text>
              }
              title={info.title}
            />
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.palette.background.default }}>
      {mainStore.networkError ? (
        <NetworkError />
      ) : (
        <ScrollView
          style={{
            paddingHorizontal: '7%',
            paddingTop: windowHeight > 736 ? 0 : '2%',
          }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={{ rowGap: 12, paddingBottom: 40 }}>
            <DetailCurrent />
            <Container
              width={windowWidth - 60}
              title={t('detail.graphicTitle')}
              children={
                isLoading ? (
                  <Text style={[theme.typography.caption, { paddingLeft: 4 }]}>{t('loading')}</Text>
                ) : (
                  <TemperatureChart />
                )
              }
            />

            <ForecastFiveDay />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default observer(Detail);
