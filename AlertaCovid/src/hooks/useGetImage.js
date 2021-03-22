import React from 'react';
import {Image} from 'react-native';
import {HomeStyles} from '../styles';
export const useGetImage = (imageIcon) => {
  switch (imageIcon) {
    case 'test':
      return (
        <Image
          source={require('../assests/images/Test.png')}
          style={HomeStyles.circleImg}
        />
      );
    case 'qrcode':
      return (
        <Image
          source={require('../assests/images/qr-code-2.png')}
          style={HomeStyles.circleImg}
        />
      );
    case 'location':
      return (
        <Image
          source={require('../assests/images/ubicacioon.png')}
          style={[HomeStyles.circleImg, {height: 50, width: 37}]}
        />
      );
    case 'heart':
      return (
        <Image
          source={require('../assests/images/Group.png')}
          style={[HomeStyles.circleImg, {height: 50, width: 58}]}
        />
      );
    default:
      return null;
  }
};
