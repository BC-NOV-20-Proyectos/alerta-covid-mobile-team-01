import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {SigninStyles} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
const ArrowButton = ({handleSubmit}) => {
  return (
    <TouchableOpacity style={SigninStyles.arrowBtn} onPress={handleSubmit}>
      <Icon name="arrowright" color="white" size={45} />
    </TouchableOpacity>
  );
};

export default ArrowButton;
