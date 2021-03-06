/* eslint-disable prettier/prettier */
import React from 'react'
import { View,StyleSheet,Alert,Image} from 'react-native'
import {MyButton,Input} from './components'

export default function Main() {
    return (
        <View style={styles.container}>
           <View style={styles.lala}>
             <Image source={require('./image/music.png')} /> 
           </View>
           
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
        
    },
    lala:{
        
    },

})
