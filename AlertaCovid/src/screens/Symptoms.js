import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {SymptomsStyles} from '../styles';
import Title from '../components/atoms/SymptomsAtoms/Title';
import Form from '../components/atoms/SymptomsAtoms/Form';
import Submit from '../components/atoms/SymptomsAtoms/BtnSubmit';

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState([
    {id: 'fever', has: false, title: 'Fever and goosebumps'},
    {id: 'cough', has: false, title: 'Cough'},
    {id: 'chestPain', has: false, title: 'Short breath and chest pain'},
    {id: 'hardBreath', has: false, title: 'Difficulty to breath'},
    {id: 'lossSmell', has: false, title: 'Loss of smell'},
    {id: 'lossTaste', has: false, title: 'Loss of taste'},
    {id: 'tireness', has: false, title: 'Tireness'},
    {id: 'musclePain', has: false, title: 'Muscle pain'},
    {id: 'soreThroat', has: false, title: 'Sore throat'},
    {id: 'diarrhea', has: false, title: 'Diarrhea'},
    {id: 'conjunctivitis', has: false, title: 'Conjunctivitis'},
    {id: 'snots', has: false, title: 'Nasal mucus'},
    {id: 'eruptions', has: false, title: 'Skin rash'},
    {id: 'decoloration', has: false, title: 'Decoloration on fingers'},
    {id: 'vomits', has: false, title: 'Nausea and vomits'},
  ]);
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
      <Form symptoms={symptoms} setSymptoms={setSymptoms} />
      <Submit symptoms={symptoms} />
    </View>
  );
};

export default Symptoms;
