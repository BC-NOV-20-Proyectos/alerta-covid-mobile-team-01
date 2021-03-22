import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgreen,
    height: '100%',
  },
  subContainer: {
    backgroundColor: colors.white,
    bottom: 420,
    height: '100%',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  ContainerMessage: {
    backgroundColor: 'red',
    height: 150,
    width: 350,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  chavo: {
    height: 210,
    width: 150,
    right: -15,
    bottom: 30,
  },
  stayHomeText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 15,
  },
  preventionText: {
    color: colors.white,
  },
  helloText: {
    fontSize: 30,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  blob1: {
    height: 250,
    bottom: 100,
    right: 60,
    transform: [{rotate: '40deg'}],
  },
  blob2: {
    height: 250,
    bottom: 100,
    transform: [{rotate: '-38deg'}],
    left: 250,
    bottom: 250,
  },
  textContainer: {left: 40, bottom: 450},
  circleButton: {
    backgroundColor: colors.green,
    height: 92,
    width: 92,
    borderRadius: 92 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  circleBtnContainer: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
  circleImg:{
    height: 50,
    width: 50
  }
});
