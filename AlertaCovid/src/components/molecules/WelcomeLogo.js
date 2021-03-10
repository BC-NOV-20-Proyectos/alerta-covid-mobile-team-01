import React from 'react';
import {Image} from 'react-native';
import WelcomeTitle from '../atoms/WelcomeTilte';
import {WelcomeStyles} from '../../styles';
const WelcomeLogo = () => {
  return (
    <React.Fragment>
      <Image
        source={require('../.././assests/images/blob.png')}
        style={WelcomeStyles.blobImage}
      />
      <WelcomeTitle />
    </React.Fragment>
  );
};

export default WelcomeLogo;
