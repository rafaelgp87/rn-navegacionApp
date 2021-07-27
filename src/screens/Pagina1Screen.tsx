import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(()=>{
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title="Menú"
                    onPress={ () => navigation.toggleDrawer() }
                />
            )
        })
    },[])

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
                    <Text style={ styles.botonGrandeTexto } >
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
                        nombre: 'Valentina'
                    })}
                >
                    <Text style={ styles.botonGrandeTexto } >
                        Valentina
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}