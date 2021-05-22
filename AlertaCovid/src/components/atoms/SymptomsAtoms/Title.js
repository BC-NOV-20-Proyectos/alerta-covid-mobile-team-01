import React from 'react';
import {View, Text} from 'react-native';
import {SymptomsStyles} from '../../../styles';
import {constants} from '../../../utils';
const Title = () => {
  return (
    <View style={SymptomsStyles.title}>
      <View style={SymptomsStyles.TextContainer}>
        <Text style={SymptomsStyles.text}>{constants.what}</Text>
      </View>
      <View>
        <Text style={SymptomsStyles.text}>{constants.symptomsYouHave}</Text>
        <Text style={SymptomsStyles.text}>{constants.have}</Text>
      </View>
    </View>
  );
};

export default Title;
