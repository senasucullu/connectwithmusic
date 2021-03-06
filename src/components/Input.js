/* eslint-disable prettier/prettier */
import React from 'react'
import {View,TextInput,} from 'react-native'

export function Input(props) {
    return (
        
            <View>
                <TextInput 
                placeholder={props.myplaceholder} />
            </View>
    )
}
