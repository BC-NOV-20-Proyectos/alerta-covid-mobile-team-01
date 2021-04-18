import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles';
import {Picker} from '@react-native-picker/picker';
const TestResult = ({testResult, setTestResult}) => {
  return (
    <View style={ResultStyles.QuestionContainer}>
      <Text style={ResultStyles.textQuestion}>{constants.TestResult}</Text>
      <TouchableOpacity style={ResultStyles.Calender}>
        <Picker
          selectedValue={testResult}
          onValueChange={(itemValue) => setTestResult(itemValue)}>
          <Picker.Item label="Negative" value="Negative" />
          <Picker.Item label="Positive" value="Positive" />
        </Picker>
      </TouchableOpacity>
    </View>
  );
};

export default TestResult;
