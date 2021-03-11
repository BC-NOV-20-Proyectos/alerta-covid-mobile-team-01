import React from 'react';
import {View, Image} from 'react-native';
import {SigninStyles} from '../styles';
import WelcomeLogo from '../components/molecules/WelcomeLogo';
import SignInForm from '../components/molecules/SignInForm';
const SignIn = () => {
  return (
    <View style={SigninStyles.container}>
      <WelcomeLogo />
      <Image
        source={require('../assests/images/Mask.png')}
        style={SigninStyles.maskImg}
      />
      <SignInForm />
    </View>
  );
};

export default SignIn;
