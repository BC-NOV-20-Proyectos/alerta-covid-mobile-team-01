import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {constants} from '../utils/constants/index';
import {ResetPasswordStyle} from '../styles/';
import Icon from 'react-native-vector-icons/AntDesign';

const ResetPassword = ({navigation}) => {
  return (
    <View style={ResetPasswordStyle.Container}>
      <TouchableOpacity
        style={ResetPasswordStyle.Arrow}
        onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrowleft" color="black" size={30} />
      </TouchableOpacity>
      <Text style={ResetPasswordStyle.TextTitle}>
        {constants.ForgotPassword}
      </Text>
      <Text style={ResetPasswordStyle.TextMessage}>
        {constants.MessagePassword}
      </Text>
      <TextInput
        style={ResetPasswordStyle.input}
        placeholder="Email address"></TextInput>
      <TouchableOpacity style={ResetPasswordStyle.ButtonSend}>
        <Text style={ResetPasswordStyle.TextSend}>{constants.send}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;
