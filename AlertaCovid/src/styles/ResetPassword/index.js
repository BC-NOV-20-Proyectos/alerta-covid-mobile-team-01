import {StyleSheet} from 'react-native';

export const ResetPasswordStyle = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  TextTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
  },
  TextMessage: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },
  input: {
    width: '80%',
    borderColor: 'green',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
    padding: 10,
  },
  ButtonSend: {
    width: 250,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  TextSend: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  Arrow: {
    marginTop: 20,
    marginLeft: 20,
  },
});
