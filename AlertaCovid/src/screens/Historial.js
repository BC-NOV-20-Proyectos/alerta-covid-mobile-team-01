import React from 'react'
import { View, Text, Image } from 'react-native';
import {constants} from '../utils';
import {HistoriaStyles} from '../styles';

const Historial = () => {
    return (
        <View>
            <Image source= {require('../assests/images/maps.png')}> </Image>
            <Text style={HistoriaStyles.TextTitle}>{constants.Historial}</Text>
        </View>
    )
}

export default Historial;
