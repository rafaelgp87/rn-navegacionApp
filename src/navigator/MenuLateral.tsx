import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
//import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

/*
const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SettingsScreen"
        component={ SettingsScreen }
      />
    </Stack.Navigator>
  )
}
*/

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        //drawerPosition="right"
        drawerType={ width >= 768 ? 'permanent' : 'front' }
        drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del Avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de menú */}
      <View style={ styles.menuContainer } >
          <TouchableOpacity 
            style={ styles.menuBoton } 
            onPress={ () => navigation.navigate('StackNavigator') }
          >
            <Text style={ styles.menuTexto } >Navegación</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={ styles.menuBoton } 
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto } >Ajustes</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}