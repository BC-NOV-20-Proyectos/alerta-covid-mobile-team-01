import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {colors} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createMaterialBottomTabNavigator();
import Home from '../screens/Home';
import Symptoms from '../screens/Symptoms';
import QRcode from '../screens/QRcode';
import Places from '../screens/Places';
export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.green}
      inactiveColor={colors.red}
      barStyle={{backgroundColor: colors.white}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Places"
        component={Places}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Symptoms"
        component={Symptoms}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="QR"
        component={QRcode}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="qrcode" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
