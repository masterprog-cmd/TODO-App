import { Button } from '@react-native-material/core'
import React, { useState } from 'react'
import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export const RegistroScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Image source={require('../assets/TODO_icon.png')} style={{ height: 80, width: 80 }} />
            </View>
            <View>
                <TextInput placeholder='email' style={style.textInput} onChangeText={(text) => setEmail(text)} />
            </View>
            <Button title={'Send email'} style={{ marginTop: 20 }} color={'#0876D6'} />
            <View>
                <Text style={{ marginTop: 30 }} onPress={() => { navigation.goBack }}>You have an account? Sign in</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        width: 350,
        textAlign: 'center'
    }
})