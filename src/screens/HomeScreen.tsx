import React, { useEffect, useState } from 'react'
import { View, StyleSheet, InteractionManager, Text } from 'react-native'
import { Divider } from 'react-native-flex-layout'
import { FlatList } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { getData } from '../api/Api'

export const HomeScreen = ({ navigation }: any) => {
    const [notes, setNotes] = useState<any>([]);
    const [value, setValue] = useState('');
    const [done, setDone] = useState<any[]>([]);
    const [todo, setTodo] = useState<any>([]);

    useEffect(() => {
        getNotes()
            .then(res => {
                setNotes(res)
            })
        console.log(todo)
    }, [])

    const getNotes = async () => {
        let arr: any = [];
        await getData()
            .then(response => {
                response.map((item: any, index: any) => {
                    arr.push({
                        id: item.id,
                        title: item.content,
                        data: {
                            important: item.important,
                        },
                        done: item.done,
                        index: index + 1,
                    })
                })
                groupNotes(arr);
            })
    }

    const groupNotes = (resp: any) => {
        let arrTodo: any = [];
        let arrDone: any = [];
        resp.map((item: any) => {
            if (item.done) {
                arrDone.push(item)
            } else {
                arrTodo.push(item)
            }
        }
        )
        setTodo(arrTodo);
        setDone(arrDone);
    }


    const Item = ({ title }: any) => (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View>
                <RadioButton.Item label={title} value={title} color={'black'} onPress={() => { }} />
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
                    <Text style={styles.titleText}>Por hacer</Text>
                    <Divider color='black' style={styles.divider} />
                    <FlatList
                        data={todo}
                        renderItem={renderItem}
                        keyExtractor={(item: any) => item.id}
                    />
                </View>

                <View style={{ marginTop: 50 }}>
                    <Text style={styles.titleText}>Hechas</Text>
                    <Divider color='black' style={styles.divider} />
                    <FlatList
                        data={done}
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
    titleText: {
        fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: 'black'
    },
    divider: {
        width: '90%', marginLeft: 15, marginTop: 5
    },
    button: {
        position: 'absolute',
        top: 580,
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
