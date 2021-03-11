import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {SigninStyles} from '../../styles';
import {constants} from '../../utils';
import ArrowButton from '../atoms/ArrowButton';
import ForgotPassword from '../atoms/ForgotPassword';
import * as Yup from 'yup';
import {Formik} from 'formik';
const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid E-Mail Format').required('Required'),
    password: Yup.string().min(4).max(15).required('Required'),
  });
  return (
    <View style={SigninStyles.formContainer}>
      <Text style={SigninStyles.SigninTitle}>{constants.SignIn}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
        {({errors, handleChange, values, handleSubmit, touched}) => (
          <View>
            <ArrowButton handleSubmit={handleSubmit} />
            <TextInput
              onChangeText={handleChange('email')}
              value={values.email}
              style={SigninStyles.input}
              placeholder="Email"
            />
            {errors.email && (
              <Text style={SigninStyles.errorMessage}>{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              style={SigninStyles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
            {errors.password && (
              <Text style={SigninStyles.errorMessage}>{errors.password}</Text>
            )}
          </View>
        )}
      </Formik>
      <ForgotPassword />
    </View>
  );
};

export default SignInForm;
