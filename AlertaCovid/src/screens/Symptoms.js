import React from 'react';
import {View, Text, Image} from 'react-native';
import {SymptomsStyles} from '../styles';
import Title from '../components/atoms/SymptomsAtoms/Title';
import Form from '../components/atoms/SymptomsAtoms/Form';
const Symptoms = () => {
  return (
    <View>
      <Image
        source={require('../assests/images/mujer.png')}
        style={SymptomsStyles.woman}
      />
      <Image
        source={require('../assests/images/virusverde.png')}
        style={SymptomsStyles.virus1}
      />
      <Image
        source={require('../assests/images/virusverde.png')}
        style={SymptomsStyles.virus2}
      />
      <Image
        source={require('../assests/images/virusverde.png')}
        style={SymptomsStyles.virus3}
      />
      <Title />
      <Form />
    </View>
  );
};

export default Symptoms;
