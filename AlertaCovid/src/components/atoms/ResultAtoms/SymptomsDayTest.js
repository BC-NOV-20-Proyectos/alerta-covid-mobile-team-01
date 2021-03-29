import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles'

const SymptomsDayTest = () => {
    return (
        <View style={ResultStyles.QuestionContainer}>
            <Text style={ResultStyles.textQuestion}>{constants.SymptomsDayTest}</Text>
            <TouchableOpacity style={ResultStyles.Calender}><Text style={ResultStyles.textDate}>No</Text></TouchableOpacity>
        </View>
    )
}

export default SymptomsDayTest
