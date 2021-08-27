import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableHighlight } from 'react-native'
import LocationCard from '../../components/LocationCard'
import { styles } from './styles'
import axios from 'axios'

export default function DestinationSearch() {

    const [ currentLocation, setCurrentLocation ] = useState('')
    const [ destination, setDestination ] = useState()
    const [ suggestion, setSuggestion ] = useState([])

    const getAutoComplete = async address => {
        await axios.get(`https://app.geocodeapi.io/api/v1/autocomplete?text=${address}&apikey=94cb7980-dc14-11eb-8e6a-0db3a2065a18`)
        .then(res => {
            setSuggestion(res.data.features)
        })
        .catch(console.log)
    }



    return (
        <View style={styles.destinationSearch}>
           <View style={styles.searchBox}>
                <View style={styles.pinContainer}>
                    <View style={[styles.pinFrom, styles.pin]}></View>
                    <View style={styles.pinRail}></View>
                    <View style={[styles.pinTo, styles.pin]}></View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={[styles.input, styles.inputFrom]}>
                        <TextInput placeholder='Where to?' onChangeText={text => getAutoComplete(text)} onSubmitEditing={() => getAutoComplete(currentLocation)} />
                    </View>
                    <View style={[styles.input, styles.inputTo]}>
                        <TextInput placeholder='Where to?' />
                    </View>
                </View>
           </View>
           
            <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                {
                    suggestion.map((location, index) => {
                        return(
                            <TouchableHighlight key={index}>
                                <LocationCard location={location} />
                            </TouchableHighlight>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
