import { useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useMainStore } from 'store/useMainStore';

export const useLocation = () => {
    const setLocation = useMainStore((state) => state.setLocation);

    const getCurrentLocation = () => {
        console.log('Requesting location permission and position...');
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(`📍 Konum Bulundu: Enlem ${position.coords.latitude}, Boylam ${position.coords.longitude}`);
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => {
                console.log('Geolocation error:', error);
                // Fallback to default city (Istanbul) is handled by initial store state
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);
};
