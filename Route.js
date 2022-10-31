import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import MapScreen from './src/screens/MapScreen';


const Route = () => {
  useEffect(() => { }, []);
  const HomeStack = createStackNavigator();
  const HomeStackScreen = () =>
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <HomeStack.Screen name="Login" component={Login} options={{ headerLeft: null }} />
      <HomeStack.Screen name="MapScreen" component={MapScreen} options={{ headerLeft: null }} />
   
    </HomeStack.Navigator>
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};
export default Route;
