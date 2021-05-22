import React from 'react';
import {View, Text} from 'react-native';
import {QRstyles} from '../styles/QRcode'
import QRscan from '../components/atoms/QRatoms/QrScan';
const QRcode = () => {
  return (
    <View style={QRstyles.Container}>
      <QRscan/>
    </View>
  );
};

export default QRcode;
