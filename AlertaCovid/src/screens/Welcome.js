import React from 'react';
import {View, Text, Image} from 'react-native';
import {WelcomeStyles, colors} from '../styles';
import ButtonStart from '../components/atoms/Button';
import WelcomeLogo from '../components/molecules/WelcomeLogo';
import {constants} from '../utils';
const Welcome = () => {
  return (
    <View style={WelcomeStyles.container}>
      <WelcomeLogo />
      <Image
        source={require('../assests/images/Virus-amico1.png')}
        style={WelcomeStyles.virusImage1}
      />
      <Image
        source={require('../assests/images/Virus-amico2.png')}
        style={WelcomeStyles.virusImage2}
      />
      <Image
        source={require('../assests/images/Virus-amico2.png')}
        style={WelcomeStyles.virusImage3}
      />
      <ButtonStart color={colors.green} title={constants.Started} />
      <Image
        source={require('../assests/images/Virus-amico.png')}
        style={WelcomeStyles.virusImage}
      />
    </View>
  );
};

export default Welcome;
