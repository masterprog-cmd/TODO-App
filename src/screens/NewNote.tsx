import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { postData } from '../api/Api'

export const NewNote = ({ navigation }: any) => {
    const [content, setContent] = useState('');
    const [important, setImportant] = useState('No importante');
    const [disable, setDisable] = useState(true);

    const sendData = (content: string, tipo: boolean) => {
        postData({ "content": content, "important": tipo, "done": false })
            .then(res => {
                console.log(res);
            })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: 80 }}>
            <TextInput multiline={true} placeholder={'Escribe tu nota aquí...'}
                textAlign={'center'} textAlignVertical={'top'} onChangeText={(value: any) => { setContent(value) }} />
            <View style={{ flex: 3 }
            } >
                <RadioButton.Group onValueChange={(value: any) => { setImportant(value) }} value={important}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 140 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="No importante" color='black' />
                            <Text>No Importante</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="importante" color='black' />
                            <Text>Importante</Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={{ flexDirection: 'row', marginTop: 90, justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.button}>
                        <Text style={styles.buttonText}>Descartar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        sendData(content, (important === 'importante') ? true : false);
                        navigation.goBack();
                    }} style={{ ...styles.button, paddingHorizontal: 30 }}>
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    }
})