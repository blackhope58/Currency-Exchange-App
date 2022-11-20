// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Pages/Home';
import Exchange from './Pages/Exchange';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="ExchangePage" component={Exchange} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
