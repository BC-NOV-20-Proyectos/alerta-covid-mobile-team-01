import React from 'react';
import {View, Text, Image} from 'react-native';
import {HomeStyles} from '../../../styles';
import {constants} from '../../../utils';
const StayHome = () => {
  return (
    <View style={HomeStyles.ContainerMessage}>
      <View>
        <Text style={HomeStyles.stayHomeText}>{constants.Stay}</Text>
        <Text style={HomeStyles.preventionText}>{constants.Prevention1}</Text>
        <Text style={HomeStyles.preventionText}>{constants.Prevention2}</Text>
      </View>
      <Image
        source={require('../../../assests/images/chavoqec.png')}
        style={HomeStyles.chavo}
      />
    </View>
  );
};

export default StayHome;
