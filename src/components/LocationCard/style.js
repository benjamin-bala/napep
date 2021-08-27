import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    locationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        paddingVertical: 10,
        marginTop: 10
    },
    locationIcon:{
        width: 30,
        height: 30,
        backgroundColor: '#D7C73A',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    locationDetails:{
        marginLeft: 10
    },
    locationTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    locationText: {
        fontSize: 13,
        color: '#777'
    }
})