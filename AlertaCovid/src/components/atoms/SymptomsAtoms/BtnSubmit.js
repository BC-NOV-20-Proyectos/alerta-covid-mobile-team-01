import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SymptomsStyles} from '../../../styles';
import {constants} from '../../../utils/constants';
import {connect} from 'react-redux';
import {symptoms_true} from '../../../redux/actions/HealthActions';
import {findTrue} from '../../../utils/functions';
const Submit = ({symptoms, symptoms_true}) => {
  return (
    <TouchableOpacity
      style={SymptomsStyles.btnContainerSubmit}
      onPress={() => findTrue(symptoms, symptoms_true)}>
      <Text style={SymptomsStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  symptoms_true,
};
export default connect(null, mapDispatchToProps)(Submit);
