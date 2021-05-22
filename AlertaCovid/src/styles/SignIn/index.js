import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const SigninStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgreen,
    height: '100%',
  },
  maskImg: {
    bottom: 450,
    height: 300,
    width: 300,
    left: 170,
  },
  formContainer: {
    backgroundColor: colors.white,
    top: -470,
    height: '70%',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  arrowBtn: {
    backgroundColor: colors.green,
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    left: 250,
    bottom: 115
  },
  arrow: {height: 60, width: 60, backgroundColor: 'white'},
  SigninTitle: {
      fontWeight: 'bold',
      fontSize: 35,
      bottom: -5,
      left: 10
  },
  input:{
      borderBottomColor: colors.gray,
      borderBottomWidth: 1,
      marginBottom: 20,
      bottom: 40,
      left: 10,
      width: '90%',
      fontSize: 20,
      padding: '5%'
  },
  errorMessage: {
      bottom: 50,
      left: 10,
      color: colors.red
  },
  forgot: {
    alignItems: 'center'
  },
  forgotText: {
    color: colors.green,
    fontSize: 22,
    fontWeight: '900',
    bottom: 20
  },
  error: {
    fontSize: 20,
    
  }
  
});
