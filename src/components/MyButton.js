/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

export function MyButton(props) {
    return (
        <View>
           <TouchableOpacity style={styles.button} onPress={(props.onSumbit)}>
                <Text style={styles.title}>{props.mytitle}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    button:{
        backgroundColor:'grey',
        margin:5,
        padding:5,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        color:'white',
       },

})

