import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
const DateResult = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  return (
    <View style={ResultStyles.QuestionContainer}>
      <Text style={ResultStyles.textQuestion}>{constants.DateOfResult}</Text>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={ResultStyles.Calender}>
        <Text style={{padding: 10}}>{constants.DateOfResult}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(e) => {
            console.log(e);
            setShow(false);
          }}
        />
      )}
    </View>
  );
};

export default DateResult;
