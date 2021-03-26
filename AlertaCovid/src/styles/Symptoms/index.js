import {StyleSheet} from 'react-native';
import {colors} from '../colors';
export const SymptomsStyles = StyleSheet.create({
  virus1: {
    height: 50,
    width: 50,
    bottom: 550,
    left: 250,
  },
  virus2: {
    height: 100,
    width: 100,
    bottom: 600,
    left: 300,
  },
  virus3: {
    height: 40,
    width: 40,
    left: 360,
    bottom: 610,
  },
  woman: {
    height: 552,
    width: 424,
    left: '50%',
    bottom: -60,
  },
  title: {
    bottom: 670,
    left: 30,
  },
  TextContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
  },
  formContainer: {
    bottom: 650,
    width: '85%',
    alignSelf: 'center',
    height: 300,
  },
  checkContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightgreen,
    opacity: .8,
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10
  },
  textCheckBox: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 20
  },
  btnContainerSubmit:{
    width: 250,
    height: 50,
    backgroundColor: colors.green,
    bottom: 630,
    alignSelf: 'center',
    borderRadius: 33,
    alignItems: 'center',
  },
  TextSubmit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    alignContent: 'center',
    margin: 10
  }
});
