'use strict';

import React, {Component} from 'react';

import {Text, TouchableOpacity, Linking} from 'react-native';
import {constants} from '../../../utils/constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {QRstyles} from '../../../styles/QRcode';

export default class ScanScreen extends Component {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <TouchableOpacity style={QRstyles.buttonTouchable}>
            <Text style={QRstyles.buttonText}>{constants.done}</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}
