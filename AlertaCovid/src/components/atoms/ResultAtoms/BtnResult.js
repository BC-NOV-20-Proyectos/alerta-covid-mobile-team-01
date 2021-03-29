import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ResultStyles} from '../../../styles'
import {constants} from '../../../utils/constants';

const Submit = ({symptoms}) => {
  return (
    <TouchableOpacity
      style={ResultStyles.btnContainerSubmit}
      onPress={() => console.log(symptoms)}>
      <Text style={ResultStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};

export default Submit;
