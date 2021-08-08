import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext( AuthContext );
    const { isLoggedIn } = authState;

    return (
        <View style={ styles.grobalMargin }>
            <Text style={ styles.title }> Contacts Screen </Text>

            {
                !isLoggedIn && <Button title='SignIn' onPress={ signIn } />                   
            }

        </View>
    )
}