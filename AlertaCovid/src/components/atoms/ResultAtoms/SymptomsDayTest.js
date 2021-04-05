import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles';
import {Picker} from '@react-native-picker/picker';
const SymptomsDayTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={ResultStyles.QuestionContainer}>
      <Text style={ResultStyles.textQuestion}>{constants.SymptomsDayTest}</Text>
      <TouchableOpacity style={ResultStyles.Calender}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Yes" value="Yes" />
        </Picker>
      </TouchableOpacity>
    </View>
  );
};

export default SymptomsDayTest;
