import React from 'react';
import {View, Text} from 'react-native';
import {WelcomeStyles} from '../../styles';
import {constants} from '../../utils';
const WelcomeTilte = () => {
  return (
    <View style={WelcomeStyles.titleContainer}>
      <Text style={WelcomeStyles.Title}>{constants.WelcomeTitle}</Text>
      <Text style={WelcomeStyles.Title}>{constants.WelcomeTitle2}</Text>
    </View>
  );
};

export default WelcomeTilte;
