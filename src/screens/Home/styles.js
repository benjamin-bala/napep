import { StyleSheet } from 'react-native'
import { theme } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        height: theme.screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        height: theme.screenHeight,
        width: theme.screenWidth
    }
})