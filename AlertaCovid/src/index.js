import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator, AuthNavigator} from './navigations';
import {connect} from 'react-redux';

const Root = ({Auth}) => {
  return (
    <NavigationContainer>
      {!Auth.user ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    Auth: state.AuthReducer,
  };
};
export default connect(mapStateToProps, null)(Root);
