/* eslint-disable prettier/prettier */
import React from 'react'
import { View,StyleSheet,Alert,} from 'react-native'
import MyButton from './MyButton'
import Input from './Input'

export default function Main() {
    return (
        <View style={styles.container}>
            <Input myplaceholder='E-mailinizi giriniz..' />
            <Input myplaceholder='Şifrenizi giriniz..' />

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
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    }

})
