import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Location from '../screens/Historial';
import Home from '../screens/Home';

export const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};
