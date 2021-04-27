import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const HistoriaStyles = StyleSheet.create({
  TextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 420,
  },
  imageBG: {
    alignSelf: 'center',
    marginLeft: 150,
    top: 50,
  },
  Container: {
    alignContent: 'flex-start',
    height: 500,
    bottom: 50,
    width: '95%',
    alignSelf: 'center',
  },
  TextTitlePlace: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    opacity: 9,
  },
  formContainer: {
    backgroundColor: colors.lightgreen,
    opacity: 0.9,
    borderRadius: 10,
    padding: 20,
    bottom: 400,
    margin: 10
  },
  TextInf: {
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 2,
  },
});
