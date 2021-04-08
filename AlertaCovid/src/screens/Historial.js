import React from 'react'
import { View, Text, Image } from 'react-native';
import {constants} from '../utils';
import {HistoriaStyles} from '../styles';
import PlaceCard from '../components/atoms/HistorialAtoms/PlaceCard';

const Historial = () => {
    return (
        <View>
            <Image source= {require('../assests/images/maps.png')} style={HistoriaStyles.imageBG}></Image>
            <Text style={HistoriaStyles.TextTitle}>{constants.Historial}</Text>
            <PlaceCard></PlaceCard>
        </View>
    )
}

export default Historial;
