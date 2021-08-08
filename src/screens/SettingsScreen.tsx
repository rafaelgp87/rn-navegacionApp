import React, { useContext } from 'react';
import analytics from '@react-native-firebase/analytics';
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext);

    analytics().logScreenView({
        screen_name: 'Persona'
    })

    return (
        <View style={{
            ...styles.grobalMargin,
            marginTop: insets.top + 20
        }} >
            <Text style={styles.title}>Settings Screen</Text>
            <Text>
                {JSON.stringify(authState, null, 4)}
            </Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colors.primary} />
                )
            }

        </View>
    )
}