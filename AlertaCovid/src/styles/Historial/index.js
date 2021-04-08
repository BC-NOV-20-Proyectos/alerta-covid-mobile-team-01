import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const HistoriaStyles = StyleSheet.create({
  TextTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 500,
  },
  imageBG: {
    alignSelf: 'center',
    marginLeft: 150,
    top: 50,
  },
  Container: {
    height: 500,
    bottom: 450,
    width: '95%',
    alignSelf: 'center',
  },
  TextTitlePlace: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    opacity: 9,
  },
  formContainer: {
    backgroundColor: colors.lightgreen,
    opacity: 0.8,
    borderRadius: 10,
    padding: 20,
  },
  TextInf: {
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 2,
  },
});
