import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../styles/colors';
import {connect} from 'react-redux';
import {logoutFetch} from '../../../redux/actions/AuthActions';
import {HomeStyles} from '../../../styles/Home';
const LogOutBtn = ({Token, logoutFetch}) => {
  return (
    <TouchableOpacity
      onPress={() => logoutFetch(Token)}
      style={HomeStyles.logOutBtn}>
      <Icon name="logout" size={40} color={colors.black} />
    </TouchableOpacity>
  );
};
const mapStateToProps = (state) => {
  return {
    Token: state.AuthReducer.user.token,
  };
};
const mapDispatchToProps = {
  logoutFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogOutBtn);
