import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMainStore } from 'store/useMainStore';
import { WeatherCurrentData } from 'screens/mainScreen/interfaces/interface_home';

export const useWeatherCurrent = () => {
  const city = useMainStore((state) => state.city);
  const weatherUnit = useMainStore((state) => state.weatherUnit);
  const setWeatherUnit = useMainStore((state) => state.setWeatherUnit);

  const location = useMainStore((state) => state.location);

  const {
    data: currentTemp,
    isLoading,
    refetch: refetchCurrent,
  } = useQuery<WeatherCurrentData>({
    queryKey: ['currentTemp', city, weatherUnit, location],
    queryFn: async () => {
      try {
        const unit = (await AsyncStorage.getItem('unit')) || weatherUnit;
        setWeatherUnit(unit);

        let url = 'https://api.openweathermap.org/data/2.5/weather?';
        if (location) {
          url += `lat=${location.lat}&lon=${location.lon}`;
        } else {
          url += `q=${city}`;
        }
        url += `&units=${unit}&appid=4ece27e8959cae958f124f7316c6e352`;

        const response = await axios.get(url);
        return response.data;
      } catch (error: any) {
        // Error will be handled by React Query
        throw error;
      }
    },
    enabled: true,
  });

  return { currentTemp, isLoading, refetchCurrent };
};
