'use strict';

import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils/constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {QRstyles} from '../../../styles/QRcode';
import {connect} from 'react-redux';
import {add_place} from './../../../redux/actions/HealthActions';
class ScanScreen extends Component {
  onSuccess = (e) => {
    console.log(e.data);
    alert(e.data);
    if (!this.props.Places.includes(e.data)) {
      this.props.add_place(e.data);
    }
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
const mapStateToProps = (state) => {
  return {
    Places: state.HealthReducer.places,
  };
};
const mapDispatchToProps = {add_place};
export default connect(mapStateToProps, mapDispatchToProps)(ScanScreen);
