/* eslint-disable prettier/prettier */
import React from 'react'
import { View,StyleSheet,Text, TouchableOpacity, Alert, Button} from 'react-native'
import MyButton from './MyButton'

export default function Main() {
    return (
        <View style={styles.container}>
            <MyButton
            mytitle='Giriş Yap' 
            onSumbit={()=> Alert.alert('Giriş Yapılıyor...')}/>
            <MyButton 
            mytitle='Kayıt Ol' 
            onSumbit={()=> Alert.alert('Kayıt Olundu!')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8eaf6',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    
    
        
        
    
})
