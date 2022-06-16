import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { NewNote } from '../screens/NewNote';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: true, headerLeft: () => null }} />
            <Stack.Screen name="New Note" component={NewNote} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
}
