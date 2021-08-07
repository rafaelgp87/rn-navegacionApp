import React, { useEffect }  from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect')
    }, [])

    return (
        <View 
            style={{ 
                ...styles.grobalMargin,
                marginTop: top + 10 
            }}
        >
            <Text style={ styles.title }> Icons </Text>
            <Text>
                <Icon name="airplane-outline" size={30} color={ colors.primary } />
                <Icon name="attach-outline" size={30} color={ colors.primary } />
                <Icon name="bonfire-outline" size={30} color={ colors.primary } />
                <Icon name="calculator-outline" size={30} color={ colors.primary } />
                <Icon name="chatbubble-ellipses-outline" size={30} color={ colors.primary } />
                <Icon name="images-outline" size={30} color={ colors.primary } />
                <Icon name="leaf-outline" size={30} color={ colors.primary } />
            </Text>
        </View>
    )
}