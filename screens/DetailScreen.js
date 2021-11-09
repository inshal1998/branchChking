import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Keychain from 'react-native-keychain';

const DetailScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        checkUserStatus();
      }, []);

    const checkUserStatus = async  () =>{
        const credentials = await Keychain.getGenericPassword();
        setUsername(credentials.username)
        setPassword(credentials.password)

    }  

    return (
        <View style={{justifyContent:"center"}}>
            <Text style={{alignItems:"center" , fontSize:22}}>{username}</Text>
            <Text style={{alignItems:"center" , fontSize:22}}>{password}</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
