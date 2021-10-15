import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Pressable } from 'react-native';

const Login = ({ onClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Text style={styles.textInfo}>Email</Text>
      <View>
        <TextInput style={styles.infoInput} placeHolder='Your Email'/>
      </View>
      <Text style={styles.textInfo}>Password</Text>
      <View>
        <TextInput
          style={styles.infoInput}
          placeHolder='Your Password'
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.btn} onPress={() => onClick()}>
        <Text style={styles.btnText}>Welcome</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 700,
    justifyContent: 'center',
    alignItems:'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  textInfo: {
    fontSize: 20,
    fontWeight:'bold',
    margin: 20
  },
  infoInput: {
    width: 300,
    height: 45,
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    paddingLeft: 100,
    fontSize: 12
  },
  btn: {
    width: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#D1E8E4',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default Login;