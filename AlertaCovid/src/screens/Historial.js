import React from 'react'
import { View, Text, Image } from 'react-native';
import {constants} from '../utils';
import {HistoriaStyles} from '../styles';
import PlaceCard from '../components/atoms/HistorialAtoms/PlaceCard';
import {connect} from 'react-redux';
import {PlaceFetch} from '../redux/actions/PlaceActios'

const Historial = ({Token,PlaceFetch}) => {
    return (
        <View>
            <Image source= {require('../assests/images/maps.png')} style={HistoriaStyles.imageBG}></Image>
            <Text style={HistoriaStyles.TextTitle}>{constants.Historial}</Text>
            <PlaceCard></PlaceCard>
        </View>
    )
};

const mapStateToProps = (state) => {
    return {
        Token: state.HealthReducer.user.token,
    }
}
const mapDispatchToProps = {
    PlaceFetch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Historial)