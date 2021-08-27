import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    destinationSearch:{
        marginTop: 10,
        marginHorizontal: 15,
        height: '100%'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 120,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        paddingBottom: 10
    },
    pinContainer: {
        alignItems: 'center',
        flex: 1
    },
    pinRail: {
        width: 1,
        height: 40,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#ccc'
    },
    pin: {
        borderRadius: 100
    },
    pinFrom: {
        backgroundColor: 'green',
        width: 15,
        height: 15,
    },
    pinTo: {
        backgroundColor: 'red',
        width: 10,
        height: 10
    },
    searchContainer: {
        flex: 9,
        marginLeft: 10,
        width: 100
    },
    input:{
        flex: 1,
        padding: 10,
        marginVertical: 5,
        alignSelf: 'stretch',
        borderRadius: 5,
    },
    inputFrom: {
        backgroundColor: '#fafafa'
    },
    inputTo:{
        backgroundColor: '#eaeaea'
    }
})