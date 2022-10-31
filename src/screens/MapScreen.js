import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions, Platform, PermissionsAndroid
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const MapScreen = (props) => {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    requestLocationPermission()
  }, []);
  const getMapRegion = () => ({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      // console.log('granted', granted);
      if (granted === 'granted') {
        // console.log('You can use Geolocation');
        getOneTimeLocation();
        // return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  const getOneTimeLocation = async () => {
    console.log('it is started....')
    await Geolocation.getCurrentPosition(
      (position) => {
        console.log("position", position);
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);
      },
      (error) => {
        console.log("error", error.message)
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        // maximumAge: 100000
      },
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} title={'Map Screen'} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={getMapRegion()}
        zoomEnabled={true}
        loadingEnabled={true}
        loadingIndicatorColor='red'
        mapPadding={{
          top: 0,
          right: 0,
          bottom: 5,
          left: 0
        }}
      >
        <Marker
          coordinate={getMapRegion()}
        />
      </MapView>
    </SafeAreaView>
  )
}
export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});