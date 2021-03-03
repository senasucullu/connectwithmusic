/* eslint-disable prettier/prettier */
import React from 'react'
import { View,StyleSheet,Text, TouchableOpacity, Alert} from 'react-native'


export default function Main() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('Giriş Yapılıyor...')}>
                <Text style={styles.title}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('Kayıt Olundu!')}>
                <Text style={styles.title}>Kayıt Ol</Text>
            </TouchableOpacity>
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
    title:{
     fontWeight:'bold',
     color:'black',
    },
    button:{
        backgroundColor:'#9fa8da',
        margin:5,
        padding:5,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center',
        
        
    }
})
