import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView, Image
} from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [flatlistData, setFlatlistData] = useState([]);
  useEffect(() => {
    getFlatlistData();
  }, []);
  const getFlatlistData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    let url = 'https://fakestoreapi.com/products';
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('data from resp from products Api hit....', result);
        if (result) {
          setFlatlistData(result)
        } else {
          setFlatlistData([]);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('MapScreen') }} style={styles.infoListItemConatiner}>
        <View style={[{ flexDirection: 'row', alignItems: 'center', padding: 10 }]}>
          <View style={{ marginRight: 5 }}>
            <Image style={{ width: 40, height: 40 }}
              source={{
                uri: item.image,
              }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontSize: 20, color: '#000' }}>price</Text>
            <Text style={{ fontSize: 16, color: '#aaa' }}>${item.price}</Text>
          </View>
        </View>
        {item.image != '' ? <Image
          style={{ width: '100%', height: 300, marginBottom: 10, }}
          source={{
            uri: item.image,
          }}
        /> : <View></View>}
        <View style={{ marginBottom: 10 }}>
          <Text numberOfLines={3} style={{ fontSize: 16, fontWeight: '500', color: '#000' }}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header showBackButton={false} title={'Products'} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={flatlistData}
        renderItem={({ item, index }) => (
          renderItem(item, index)
        )}
      />
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
  infoListItemConatiner: {
    flex: 1,
    // height:400,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 5,
  },
});