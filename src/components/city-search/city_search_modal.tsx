import { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    Platform,
} from 'react-native';
import axios from 'axios';
import { useTheme, useTranslate } from 'hooks';
import { useMainStore } from 'store/useMainStore';
import { IconSearch } from 'components/icons/customIcons';

interface CitySearchModalProps {
    visible: boolean;
    onClose: () => void;
}

interface CityResult {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

const CitySearchModal = ({ visible, onClose }: CitySearchModalProps) => {
    const { theme } = useTheme();
    const { t } = useTranslate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<CityResult[]>([]);
    const [loading, setLoading] = useState(false);
    const addCity = useMainStore((state) => state.addCity);
    const setCity = useMainStore((state) => state.setCity);
    const setDefaultCity = useMainStore((state) => state.setDefaultCity);
    const setLocation = useMainStore((state) => state.setLocation);

    const searchCities = async (text: string) => {
        setQuery(text);
        if (text.length < 3) {
            setResults([]);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=4ece27e8959cae958f124f7316c6e352`
            );
            setResults(response.data);
        } catch (error) {
            console.error('Error searching cities:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectCity = async (city: CityResult) => {
        await addCity(city.name);
        setCity(city.name);
        setDefaultCity(city.name);
        // Update location to switch weather data source
        setLocation({ lat: city.lat, lon: city.lon });
        onClose();
        setQuery('');
        setResults([]);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalOverlay}>
                <View style={[styles.modalContent, { backgroundColor: theme.palette.background.paper }]}>
                    <View style={styles.header}>
                        <Text style={[theme.typography.title2, { marginBottom: 10 }]}>
                            {t('settings.addCity')}
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={{ color: theme.palette.primary.main }}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: theme.palette.background.default }]}>
                        <IconSearch />
                        <TextInput
                            style={[styles.input, theme.typography.caption, { color: theme.palette.text?.primary, fontSize: 16 }]}
                            placeholder={t('settings.searchCity')}
                            placeholderTextColor={theme.palette.text?.secondary}
                            value={query}
                            onChangeText={searchCities}
                            autoFocus
                        />
                    </View>

                    {loading ? (
                        <ActivityIndicator style={{ marginTop: 20 }} color={theme.palette.primary.main} />
                    ) : (
                        <FlatList
                            data={results}
                            keyExtractor={(item, index) => `${item.name}-${item.lat}-${index}`}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.resultItem}
                                    onPress={() => handleSelectCity(item)}
                                >
                                    <Text style={[theme.typography.caption, { color: theme.palette.text?.primary, fontSize: 16 }]}>
                                        {item.name}, {item.country}
                                    </Text>
                                    {item.state && (
                                        <Text style={[theme.typography.caption, { color: theme.palette.text?.secondary }]}>
                                            {item.state}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        borderRadius: 20,
        padding: 20,
        height: '60%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40,
        marginTop: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    resultItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});

export default CitySearchModal;
