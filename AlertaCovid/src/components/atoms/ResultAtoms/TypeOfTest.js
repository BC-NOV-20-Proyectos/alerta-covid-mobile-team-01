import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles'
import RNPickerSelect from 'react-native-picker-select';


const TypeOfTest = () => {
    return (
        <View style={ResultStyles.QuestionContainer}>
            <Text style={ResultStyles.textQuestion}>{constants.TypeOfTest}</Text>
        <TouchableOpacity style={ResultStyles.Calender}><Text style={ResultStyles.textDate}>PCR</Text></TouchableOpacity>
        </View>
    )
}

export default TypeOfTest
