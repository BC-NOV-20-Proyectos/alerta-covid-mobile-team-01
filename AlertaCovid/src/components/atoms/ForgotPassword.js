import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {constants} from '../../utils';
import {SigninStyles} from '../../styles'
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={SigninStyles.forgot} onPress={() => navigation.navigate('ResetPassword')}>
      <Text style={SigninStyles.forgotText}>{constants.ForgotPassword}</Text>
    </TouchableOpacity>
  );
};

export default ForgotPassword;
