import React, { useState } from 'react'
import { View, TextInput, Image, Text } from 'react-native'
import { Button } from '@react-native-material/core'

export const LoginScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ alignItems: 'center', top: 100 }}>
            <Image source={require('../assets/TODO_icon.png')} />
            <View style={{ marginTop: 40 }}>
                <TextInput
                    style={{ borderRadius: 40, borderColor: 'black', borderWidth: 1, height: 60, width: 350 }}
                    placeholder="Username"
                    textAlign="center"
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={{ marginTop: 40 }}>
                <TextInput
                    style={{ borderRadius: 40, borderColor: 'black', borderWidth: 1, height: 60, width: 350 }}
                    placeholder="Password"
                    textAlign="center"
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={{ marginTop: 40 }}>
                <Button title='Log In' style={{ height: 40, width: 200 }} onPress={() => navigation.navigate('Home Screen')} color={'#0876D6'} />
            </View>
        </View>
    )
}
