import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import Location from '../screens/Historial'
import ResetPassword from '../screens/ResetPassword'

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};
