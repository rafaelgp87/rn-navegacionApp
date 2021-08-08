import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const { logout, authState } = useContext( AuthContext );
    const { isLoggedIn } = authState;

    return (
        <View style={ styles.grobalMargin }>
            <Text style={ styles.title }> Albums Screen </Text>

            {
                isLoggedIn && <Button title='SignOut' onPress={ logout } />                   
            }
        </View>
    )
}