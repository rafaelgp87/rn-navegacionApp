import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return(
        <View style={{ 
            ...styles.grobalMargin,
            marginTop: insets.top + 20
        }} >
            <Text style={ styles.title }>Settings Screen</Text>
        </View>
    )
}