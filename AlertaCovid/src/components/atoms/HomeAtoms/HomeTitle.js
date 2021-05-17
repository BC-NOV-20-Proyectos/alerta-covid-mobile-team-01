import React from 'react';
import {View, Text} from 'react-native';
import {HomeStyles} from '../../../styles';
import {constants} from '../../../utils';
import {connect} from 'react-redux';
const HomeTitle = ({User}) => {
  return (
    <View style={HomeStyles.textContainer}>
      <Text style={HomeStyles.helloText}>{constants.Hello}</Text>
      <Text style={HomeStyles.nameText}>{User.email}</Text>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    User: state.AuthReducer.user,
  };
};
export default connect(mapStateToProps)(HomeTitle);
