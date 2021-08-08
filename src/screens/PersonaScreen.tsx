import { StackScreenProps } from '@react-navigation/stack';
import analytics from '@react-native-firebase/analytics';
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

/*
interface RouteParams {
    id: number;
    nombre: string;
}
*/

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ( { route, navigation }: Props ) => {

    //const params = route.params as RouteParams;
    const params = route.params;

    const { changeUserName, authState } = useContext( AuthContext );

    useEffect( () => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect( () => {
        changeUserName(params.nombre);
    }, [])

    analytics().logScreenView({
        screen_name: 'Persona'
    })

    return(
        <View style={ styles.grobalMargin }>
            <Text style={ styles.title }> 
                {
                    JSON.stringify( params, null, 3 )
                } 
            </Text>
        </View>
    )
}