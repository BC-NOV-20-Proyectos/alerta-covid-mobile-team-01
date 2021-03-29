import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {constants} from '../../../utils';
import {ResultStyles} from '../../../styles'

const TestResult = () => {
    return (
        <View style={ResultStyles.QuestionContainer}>
            <Text style={ResultStyles.textQuestion}>{constants.TestResult}</Text>
            <TouchableOpacity style={ResultStyles.Calender}><Text style={ResultStyles.textDate}>Negative</Text></TouchableOpacity>
        </View>
    )
}

export default TestResult
