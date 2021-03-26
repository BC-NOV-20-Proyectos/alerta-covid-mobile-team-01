import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator, AuthNavigator} from './navigations';
const Root = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Root;
