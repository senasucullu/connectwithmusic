/* eslint-disable prettier/prettier */
import React from 'react'
import {View,TextInput,StyleSheet, TouchableOpacity} from 'react-native'

export function Input(props) {
    return (
        <View>
           <TouchableOpacity>
                <TextInput style={styles.ınput}
                placeholder={props.myplaceholder}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    ınput:{
        backgroundColor:'white',
        margin:5,
        padding:5,
        borderRadius:10,
    }
})