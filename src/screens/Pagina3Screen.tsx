import analytics from '@react-native-firebase/analytics';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const Pagina3Screen = ({ navigation }: Props) => {

    analytics().logScreenView({
        screen_name: 'Pagina3'
    })

    return (
        <View style={styles.grobalMargin} >
            <Text style={styles.title} >Pagina3Screen</Text>

            <Button
                title="Regresar"
                onPress={ () => navigation.pop() }
            />

            <Button
                title="Ir a página 1"
                onPress={ () => navigation.popToTop() }
            />

        </View>
    )
}