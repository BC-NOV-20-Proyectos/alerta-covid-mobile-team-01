import React from 'react';
import {View, Text} from 'react-native';
import {HomeStyles} from '../../../styles';
import {constants} from '../../../utils';
const HomeTitle = () => {
  return (
    <View style={HomeStyles.textContainer}>
      <Text style={HomeStyles.helloText}>{constants.Hello}</Text>
      <Text style={HomeStyles.nameText}>{constants.name}</Text>
    </View>
  );
};

export default HomeTitle;
