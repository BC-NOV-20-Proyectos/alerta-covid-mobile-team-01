import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SymptomsStyles} from '../../../styles';
import {constants} from '../../../utils/constants';

const Submit = ({symptoms}) => {
  return (
    <TouchableOpacity
      style={SymptomsStyles.btnContainerSubmit}
      onPress={() => console.log(symptoms)}>
      <Text style={SymptomsStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};

export default Submit;
