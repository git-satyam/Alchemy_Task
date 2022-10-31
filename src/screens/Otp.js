import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/Header';
const { height } = Dimensions.get('window');
const Otp = ({ onSubmit }) => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.screen}>
      <Header title={'Otp Screen'} />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.12 }}>
        <Text style={styles.text}>Enter OTP</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <TextInput
          autoFocus
          value={code}
          onChangeText={setCode}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => { onSubmit(code) }}
          activeOpacity={0.6}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Confirm OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Otp;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
    color: '#000'
  },
  text: {
    fontSize: 25,
    color: '#008080'
  },
  btnContainer: {
    justifyContent: "center", alignItems: 'center',
    backgroundColor: '#008080',
    marginVertical: 20,
    height: 55,
    width: '50%',
    borderRadius: 10,
    marginTop: 20
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18
  },
});
