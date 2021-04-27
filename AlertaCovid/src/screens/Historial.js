import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {constants} from '../utils';
import {HistoriaStyles} from '../styles';
import PlaceCard from '../components/atoms/HistorialAtoms/PlaceCard';
import {connect} from 'react-redux';
import {PlaceFetch} from '../redux/actions/PlaceActios';

const Historial = ({Token, PlaceFetch, places}) => {
  console.log('places', places)
  useEffect(() => {
    PlaceFetch(Token);
  }, []);

  const data = places.map((place) => {    
    return(
      <View key={place.name}>
        <View style={HistoriaStyles.formContainer}>
          <Text style={HistoriaStyles.TextTitlePlace}>{place.institute}</Text>
          <Text style={HistoriaStyles.TextInf}>{`Area: ${place.area}`}</Text>           
          <Text style={HistoriaStyles.TextInf}>{`Lugar: ${place.name}`}</Text> 
          <Text style={HistoriaStyles.TextInf}>{`Sintomaticos: ${place.symptomatic}`}</Text> 
          <Text style={HistoriaStyles.TextInf}>{`Covid Negativo: ${place.covid_negative}`}</Text>  
          <Text style={HistoriaStyles.TextInf}>{`Covid Positivo: ${place.covid_positive}`}</Text> 
        </View>
      </View>
    )});

  return (
    <View style={HistoriaStyles.Container}>
      <Image
        source={require('../assests/images/maps.png')}
        style={HistoriaStyles.imageBG}></Image>
      <Text style={HistoriaStyles.TextTitle}>{constants.Historial}</Text>
      {data}
    </View>
  );
};


const mapStateToProps = (state) => {
  return {
    Token: state.AuthReducer.user.token,
    places: state.PlaceReducer.places
  };
};

const mapDispatchToProps = {
  PlaceFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(Historial);
