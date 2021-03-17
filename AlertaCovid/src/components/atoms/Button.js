import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WelcomeStyles} from '../../styles';

const Button = ({color, title}) => {
  return (
    <TouchableOpacity
      style={[WelcomeStyles.butonStarted, {backgroundColor: color}]}>
      <Text style={WelcomeStyles.Title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
