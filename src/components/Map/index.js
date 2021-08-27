import React, { useEffect, useState } from 'react'
import { View,Dimensions } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map({ mapStyle }) {

    const [ location, setLocation ] = useState(null)
    const [ errorMsg, setErrorMsg ] = useState(null)
    let {height,width} = Dimensions.get('window')

    useEffect(() => {
        (async () => {
            //Ask user for permission to access location
            let { status } = await Location.requestForegroundPermissionsAsync()

            //Set error if permission is denied
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            //Set location if granted
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    const aspectRatio = width/height 
    const latitudeDelta = 0.01

    let userLocation = {}

    if (location !== null) {
        let { coords } = location

        userLocation = {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta,
            longitudeDelta: latitudeDelta * aspectRatio,
        }
    }

    return (

        <View>
            <MapView 
            provider={PROVIDER_GOOGLE} 
            style={mapStyle} 
            region={location !== null ? userLocation : location}
            />
        </View>
    )
}
