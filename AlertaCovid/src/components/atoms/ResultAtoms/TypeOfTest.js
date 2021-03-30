import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles';
import {Picker} from '@react-native-picker/picker';

const TypeOfTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={ResultStyles.QuestionContainer}>
      <Text style={ResultStyles.textQuestion}>{constants.TypeOfTest}</Text>
      <TouchableOpacity style={ResultStyles.Calender}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
          <Picker.Item label="PCR" value="PCR" />
          <Picker.Item label="Another" value="Another" />
        </Picker>
      </TouchableOpacity>
    </View>
  );
};

export default TypeOfTest;
