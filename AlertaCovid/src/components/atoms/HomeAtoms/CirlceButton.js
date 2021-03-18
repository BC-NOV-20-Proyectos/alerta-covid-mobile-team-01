import React from 'react';
import {TouchableOpacity} from 'react-native';
import {HomeStyles} from '../../../styles';
import {useGetImage} from '../../../hooks';
const CirlceButton = ({imageIcon}) => {
  return (
    <TouchableOpacity style={HomeStyles.circleButton}>
      {useGetImage(imageIcon)}
    </TouchableOpacity>
  );
};

export default CirlceButton;
