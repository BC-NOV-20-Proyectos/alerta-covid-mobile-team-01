import React from 'react';
import {View, Image} from 'react-native';
import {HomeStyles} from '../styles';
import StayHome from '../components/atoms/HomeAtoms/StayHome';
import HomeTitle from '../components/atoms/HomeAtoms/HomeTitle';
import CircleButton from '../components/atoms/HomeAtoms/CirlceButton';
import {constants} from '../utils';
const Home = () => {
  return (
    <View style={HomeStyles.container}>
      <Image
        source={require('../assests/images/blobred.png')}
        style={HomeStyles.blob1}
      />
      <Image
        source={require('../assests/images/blob-2.png')}
        style={HomeStyles.blob2}
      />
      <HomeTitle />
      <View style={HomeStyles.subContainer}>
        <StayHome />
        <View style={HomeStyles.circleBtnContainer}>
          <CircleButton imageIcon={'location'} title={constants.location} />
          <CircleButton imageIcon={'heart'} title={constants.symptoms} />
        </View>
        <View style={HomeStyles.circleBtnContainer}>
          <CircleButton imageIcon={'test'} title={constants.result} />
          <CircleButton imageIcon={'qrcode'} title={constants.code} />
        </View>
      </View>
    </View>
  );
};

export default Home;
