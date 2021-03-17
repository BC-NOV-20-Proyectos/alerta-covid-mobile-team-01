import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {constants} from '../../utils';
import {SigninStyles} from '../../styles'

const ForgotPassword = () => {
  return (
    <TouchableOpacity style={SigninStyles.forgot}>
      <Text style={SigninStyles.forgotText}>{constants.ForgotPassword}</Text>
    </TouchableOpacity>
  );
};

export default ForgotPassword;
