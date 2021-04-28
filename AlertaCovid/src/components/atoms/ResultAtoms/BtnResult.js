import React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import {ResultStyles} from '../../../styles';
import {constants} from '../../../utils/constants';
import {test_positive} from '../../../redux/actions/HealthActions';
import {connect} from 'react-redux';
import {checkTest} from '../../../utils/functions';
const Submit = ({testResult, test_positive, navigation}) => {
  const Alert = () => {
    Alert.alert(
      constants.successfully,
      constants.message,
      [
        {
          text: 'ok',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <TouchableOpacity
      style={ResultStyles.btnContainerSubmit}
      onPress={() => Alert(checkTest(testResult, test_positive))}>
      <Text style={ResultStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};

export default connect(null, {test_positive})(Submit);
