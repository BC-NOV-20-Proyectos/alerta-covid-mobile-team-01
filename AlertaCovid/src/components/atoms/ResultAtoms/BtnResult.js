import React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import {ResultStyles} from '../../../styles';
import {constants} from '../../../utils/constants';
import {test_positive, reportFetch} from '../../../redux/actions/HealthActions';
import {connect} from 'react-redux';
import {checkTest} from '../../../utils/functions';
const Submit = ({testResult, test_positive, health, token, reportFetch}) => {
  return (
    <TouchableOpacity
      style={ResultStyles.btnContainerSubmit}
      onPress={() =>
        checkTest(testResult, test_positive, token, health, reportFetch)
      }>
      <Text style={ResultStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};
const mapStateToProps = (state) => {
  return {
    health: state.HealthReducer,
    token: state.AuthReducer.user.token,
  };
};
export default connect(mapStateToProps, {test_positive, reportFetch})(Submit);
