import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Otp from './Otp';
import Home from './Home';
import auth from '@react-native-firebase/auth';
import Header from '../components/Header';
const { height } = Dimensions.get('window');
const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  async function signIn(phoneNumber) {
    console.log(phoneNumber, 'hitted')
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }
  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }
  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })
  if (authenticated) return <Home />;
  if (confirm) return <Otp onSubmit={confirmVerificationCode} />;
  return (
    <View style={styles.screen}>
      <Header title={'Login'} />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.12 }}>
        <Text style={styles.text}>Enter Phone Number</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <TextInput
          autoFocus
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => { signIn(phoneNumber) }}
          activeOpacity={0.6}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Get Otp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
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
