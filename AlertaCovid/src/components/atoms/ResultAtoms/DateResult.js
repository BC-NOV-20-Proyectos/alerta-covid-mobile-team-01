import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const DateResult = () => {
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);
  return (
    <View style={ResultStyles.QuestionContainer}>
      <Text style={ResultStyles.textQuestion}>{constants.DateOfResult}</Text>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={ResultStyles.Calender}>
        <Text style={{padding: 10}}>{moment(date).format('DD/MM/YYYY')}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(e) => {
            setShow(false);
            setDate(e.nativeEvent.timestamp);
          }}
        />
      )}
    </View>
  );
};

export default DateResult;
