import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SymptomsStyles} from '../../../styles';
import CheckBox from '@react-native-community/checkbox';
import {filterSymptoms} from '../../../utils/functions';
const Form = ({symptoms, setSymptoms}) => {
  return (
    <View style={SymptomsStyles.formContainer}>
      <FlatList
        keyExtractor={(symptom) => symptom.id}
        data={symptoms}
        renderItem={({item}) => (
          <View style={SymptomsStyles.checkContainer}>
            <CheckBox
              disabled={false}
              value={item.has}
              onValueChange={(newValue) =>
                setSymptoms(
                  filterSymptoms(symptoms, item.id, newValue, item.title),
                )
              }
            />
            <Text style={SymptomsStyles.textCheckBox}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Form;
