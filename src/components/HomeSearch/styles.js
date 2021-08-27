import {  StyleSheet } from 'react-native'
import { theme } from '../../utils/theme'

export const styles = StyleSheet.create({
    homeSearch: {
        width:  theme.screenWidth - 50,
        height: 250,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 50,
        borderRadius: 12,
        padding: 20,
    },
    searchInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fafafa',
        padding: 10,
        borderRadius: 7,
        backgroundColor: '#eaeaea'        
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
        color: '#333'
    }
})