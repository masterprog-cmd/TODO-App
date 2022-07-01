import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { getData } from '../api/Api'

export const HomeScreen = ({ navigation }: any) => {
    // const [notes, setNotes] = useState<any>([]);
    const [value, setValue] = useState('');
    const [done, setDone] = useState<any[]>([]);
    const [todo, setTodo] = useState<any>();

    useEffect(() => {
        getNotes()
            .then(res => {
                res.map((item: any) => {
                    console.log(item)
                    if (item.done === true) {
                        setDone([item])
                    } else {
                        setTodo([item])
                    }
                })
                // console.log(JSON.stringify(res));
            })
        console.log(todo)
    }, [])

    const getNotes = async () => {
        let arr: any = [];
        await getData()
            .then(response => {
                response.map((item: any, index: any) => {
                    arr.push({
                        id: index,
                        title: item.content,
                        data: {
                            important: item.important,
                        },
                        done: item.done,
                        index: index + 1,
                    })
                })
            })
        return arr;
    }

    const Item = ({ title }: any) => (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View>
                <RadioButton.Item label={title} value={title} color={'black'} />
            </View>

        </RadioButton.Group>
    )

    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    )

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View>
                    <FlatList
                        data={todo}
                        renderItem={renderItem}
                        keyExtractor={(item: any) => item.id}
                    />
                </View>

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
