import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {constants} from '../utils';
import {ResultStyles} from '../styles';
import DateDone from '../components/atoms/ResultAtoms/DateDone';
import DateResult from '../components/atoms/ResultAtoms/DateResult';
import TypeOfTest from '../components/atoms/ResultAtoms/TypeOfTest';
import TestResult from '../components/atoms/ResultAtoms/TestResult';
import SymptomsDayTest from '../components/atoms/ResultAtoms/SymptomsDayTest';
import Submit from '../components/atoms/ResultAtoms/BtnResult';

const Places = () => {
  const [testResult, setTestResult] = useState();
  return (
    <View>
      <Image
        source={require('../assests/images/prueba-de-covid.png')}
        style={ResultStyles.imageBG}></Image>
      <Text style={ResultStyles.TextTitle}>{constants.result}</Text>
      <DateDone />
      <DateResult />
      <TypeOfTest />
      <TestResult testResult={testResult} setTestResult={setTestResult} />
      <SymptomsDayTest />
      <Submit testResult={testResult} />
    </View>
  );
};

export default Places;
