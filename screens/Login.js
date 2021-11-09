import React, { useState } from 'react'
import { TextInput,Button, StyleSheet, View } from 'react-native'
import * as Keychain from 'react-native-keychain';

const Login = ({navigation}) => {
    const [username, setname] = useState('')
    const [password, setpassword] = useState('')
  
    const submitValue = async() =>{
      await Keychain.setGenericPassword(username, password);
      navigation.push('DetailScreen')
    }

    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
                style={styles.inputNames}
                placeholder="Enter Name"
                onChangeText={setname}
                value={username}
              />
          <TextInput
                style={styles.inputNames}
                placeholder="Enter Password"
                onChangeText={setpassword}
                value={password}
          />
          <Button
            title="Submit"
            onPress={submitValue}
          />    
          <Button
            title="Cancel"
            onPress={submitValue}
          />    
          
        </View>
      </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"red",
        justifyContent:"center"
    },
      innerContainer:{
        height:250,
        width:"100%",
        alignSelf:"center",
        // justifyContent:"center",
        // backgroundColor:"blue",
        paddingHorizontal:10,
    },
      inputNames:{
        borderWidth:1,
        borderColor:"black",
        marginBottom:10,
        borderRadius:10
    }
})
