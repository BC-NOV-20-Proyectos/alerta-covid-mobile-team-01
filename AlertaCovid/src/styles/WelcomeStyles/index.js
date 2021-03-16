import {StyleSheet} from 'react-native'
import { colors } from "../colors";
export const WelcomeStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgreen,
        height: '100%'
    },
    virusImage:{
        height: 250,
        width: 230,
        bottom: 910,
        left: 170
    },
    virusImage1:{
        height: 280,
        width: 200,
        top: -430,
        left: 210
    },
    virusImage2:{
        height: 220,
        width: 120,
        top: -530,
        left: -25
    },
    virusImage3:{
        height: 300,
        width: 180,
        top: -610,
        right: 90
    },
    blobImage:{
        height: 400,
        width: 300,
        top: -90,
        left: -50
    },
    Title:{
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleContainer:{
        top: -330,
        left: 10
    },
    butonStarted: {
        height: 53,
        width: 222,
        bottom: 950,
        left: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        padding: 20
    }
    
})

