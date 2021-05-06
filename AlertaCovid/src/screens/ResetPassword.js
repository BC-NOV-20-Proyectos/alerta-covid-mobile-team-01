import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {constants} from '../utils/constants/index';
import {ResetPasswordStyle} from '../styles/';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import {recoveryFetch} from '../redux/actions/ResetPassActions';
import {connect} from 'react-redux';
const ResetPassword = ({navigation, recoveryFetch}) => {
  const initialValues = {
    email: '',
  };
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
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => recoveryFetch(values.email)}>
        {({handleChange, values, handleSubmit}) => (
          <View>
            <TextInput
              style={ResetPasswordStyle.input}
              placeholder="Email address"
              onChangeText={handleChange('email')}
              value={values.email}></TextInput>
            <TouchableOpacity
              style={ResetPasswordStyle.ButtonSend}
              onPress={handleSubmit}>
              <Text style={ResetPasswordStyle.TextSend}>{constants.send}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapDispatchToProps = {
  recoveryFetch,
};
export default connect(null, mapDispatchToProps)(ResetPassword);
