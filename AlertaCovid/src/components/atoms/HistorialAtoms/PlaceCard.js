import React from 'react';
import {View, Text} from 'react-native';
import {HistoriaStyles} from '../../../styles/Historial';
import {constants} from '../../../utils/constants';

const PlaceCard = () => {
  return (
    <View style={HistoriaStyles.Container}>
      <View style={HistoriaStyles.formContainer}>
        <Text style={HistoriaStyles.TextTitlePlace}>{constants.Title}</Text>
        <Text style={HistoriaStyles.TextInf}>{constants.area}</Text>
        <Text style={HistoriaStyles.TextInf}>{constants.lugar}</Text>
        <Text style={HistoriaStyles.TextInf}>{constants.sistomatico}</Text>
        <Text style={HistoriaStyles.TextInf}>{constants.positivo}</Text>
        <Text style={HistoriaStyles.TextInf}>{constants.negativo}</Text>
      </View>
    </View>
  );
};

export default PlaceCard;
