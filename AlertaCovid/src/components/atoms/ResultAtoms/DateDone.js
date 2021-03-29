import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles'

const DateDone = () => {
    return (
        <View style={ResultStyles.QuestionContainer}>
            <Text style={ResultStyles.textQuestion}>{constants.DateOfTest}</Text>
            <TouchableOpacity style={ResultStyles.Calender}><Text style={ResultStyles.textDate}>22/03/21</Text></TouchableOpacity>
        </View>
    )
}

export default DateDone
