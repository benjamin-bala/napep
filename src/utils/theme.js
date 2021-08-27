import { Dimensions } from 'react-native'

let {height,width} = Dimensions.get('window')


export const theme = {
    screenWidth: width,
    screenHeight: height
}