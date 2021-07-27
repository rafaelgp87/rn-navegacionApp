import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        })
    }, [])

    return (
        <View style={styles.grobalMargin} >
            <Text style={styles.title} >Pagina2Screen</Text>

            <Button
                title="Ir página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />

            <Button
                title="Ir Persona"
                onPress={() => navigator.navigate('PersonaScreen')}
            />

        </View>
    )
}