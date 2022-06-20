import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, FlatList, SafeAreaView, SectionList } from 'react-native'
import { Divider } from 'react-native-flex-layout'
import Icon from 'react-native-vector-icons/Ionicons'
import { getData, postData } from '../api/Api'

export const HomeScreen = ({ navigation }: any) => {
    const [notes, setNotes] = useState<any>([]);
    // const [done, setDone] = useState<any[]>([]);
    // const [todo, setTodo] = useState<any[]>([]);

    useEffect(() => {
        getNotes()
            .then(res => {
                setNotes(res);
                // console.log(JSON.stringify(res));
            })

    }, [])

    const getNotes = async () => {
        let arr: any = [];
        await getData()
            .then(response => {
                response.map((item: any, index: any) => {
                    arr.push({
                        title: item.content,
                        data: {
                            important: item.important,
                            done: item.done,
                        },
                        index: index + 1,

                    })
                })
            })
        return arr;
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                {notes.map((item: any, index: any) => {
                    return (
                        <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-between' }}>
                            <Text key={index} style={{ fontSize: 20 }}>{item.title}</Text>
                            <Text>{item.index}</Text>
                        </View>
                    )

                })}
            </View>
            <View style={styles.button}>
                <Icon name='add' size={30} color={'white'} style={{ fontWeight: 'bold' }} onPress={
                    () => navigation.navigate('New Note')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    button: {
        position: 'absolute',
        top: 620,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        height: 60,
        width: 60,
        borderRadius: 40

    }
})
