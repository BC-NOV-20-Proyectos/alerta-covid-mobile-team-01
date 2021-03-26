import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SymptomsStyles } from "../../../styles";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../../styles";
const arrowBtn = () => {
    return (
        <TouchableOpacity style={SymptomsStyles.ArrowBtn}>
            <Icon name='arrowleft' color={colors.white} size={30}/>
        </TouchableOpacity>
    )
}

export default arrowBtn
