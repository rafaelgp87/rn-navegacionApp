import React, { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { DrawerScreenProps } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => { navigation.toggleDrawer() }}
                >
                    <Icon 
                        name="menu-outline"
                        color={ colors.primary }
                        size={ 35 } 
                    />
                </TouchableOpacity>
            )
        })
    }, [])

    analytics().logScreenView({
        screen_name: 'Pagina1'
    })

    return (
        <View style={styles.grobalMargin} >
            <Text style={styles.title} >Pagina1Screen</Text>

            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5
            }}
            >Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Rafa'
                    })}
                >
                    <Icon 
                        name="body-outline"
                        color="white"
                        size={ 35 } 
                    />
                    <Text style={styles.botonGrandeTexto} >
                        Rafa
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Rafa 2'
                    })}
                >
                    <Icon 
                        name="woman-outline"
                        color="white"
                        size={ 35 } 
                    />
                    <Text style={styles.botonGrandeTexto} >
                        Rafa 2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: 'red'
                    }}
                    onPress={async()=>{
                        console.log('entro')
                        await analytics().logEvent("evento_prueba", {"nombre": "Rafa", "edad": 33});
                    } }
                >
                    <Icon 
                        name="logo-google"
                        color="white"
                        size={ 35 } 
                    />
                    <Text style={styles.botonGrandeTexto} >
                        Google
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}