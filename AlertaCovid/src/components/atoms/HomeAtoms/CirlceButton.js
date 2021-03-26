import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {HomeStyles} from '../../../styles';
import {useGetImage} from '../../../hooks';
const CirlceButton = ({imageIcon, title}) => {
  return (
    <TouchableOpacity style={HomeStyles.circleButton}>
      {useGetImage(imageIcon)}
      <Text style={HomeStyles.btnTitle} >{title}</Text>
    </TouchableOpacity>
  );
};

export default CirlceButton;
