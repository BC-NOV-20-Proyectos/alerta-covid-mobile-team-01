import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WelcomeStyles} from '../../styles';

const Button = ({color, title, navigation, RouteToGo}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteToGo)}
      style={[WelcomeStyles.butonStarted, {backgroundColor: color}]}>
      <Text style={WelcomeStyles.Title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
