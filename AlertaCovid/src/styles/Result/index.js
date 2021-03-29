import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const ResultStyles = StyleSheet.create({
    imageBG: {
        alignSelf: 'center',
    },
    textQuestion: {
        textAlign: 'center',
        bottom: 450,
        fontSize: 16,
    },
    Calender: {
        backgroundColor: colors.lightgreen,
        width: 224,
        height: 36,
        alignSelf: 'center',
        bottom: 440,
        borderRadius: 10,
        opacity: 50,
    },
    textDate: {
        textAlign: 'center',
        padding: 6,
        fontSize: 16,
    },
    QuestionContainer: {
        marginBottom: 30
    },
    container: {
        bottom: 500,
        backgroundColor: 'black'
    },
    btnContainerSubmit: {
        width: 250,
        height: 50,
        backgroundColor: colors.green,
        bottom: 440,
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
      },
      TextTitle: {
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          bottom: 500
      }
})
