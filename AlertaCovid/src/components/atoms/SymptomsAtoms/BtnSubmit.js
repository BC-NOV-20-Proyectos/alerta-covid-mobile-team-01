import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SymptomsStyles} from '../../../styles';
import {constants} from '../../../utils/constants';
import {connect} from 'react-redux';
import {symptoms_true, reportFetch} from '../../../redux/actions/HealthActions';
import {findTrue} from '../../../utils/functions';
const Submit = ({symptoms, symptoms_true, reportFetch, health, token}) => {
  return (
    <TouchableOpacity
      style={SymptomsStyles.btnContainerSubmit}
      onPress={() =>
        findTrue(symptoms, symptoms_true, health, reportFetch, token)
      }>
      <Text style={SymptomsStyles.TextSubmit}>{constants.submit}</Text>
    </TouchableOpacity>
  );
};
const mapStateToProps = (state) => {
  return {
    health: state.HealthReducer,
    token: state.AuthReducer.user.token,
  };
};
const mapDispatchToProps = {
  symptoms_true,
  reportFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(Submit);
