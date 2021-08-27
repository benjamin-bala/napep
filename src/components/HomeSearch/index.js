import React from 'react'
import { View, TextInput, ScrollView, TouchableHighlight, Text } from 'react-native'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons'
import LocationCard from '../LocationCard'
import { locations } from '../../utils/locations'

export default function HomeSearch() {
    
    return (
        <View style={styles.homeSearch}>
            <View style={styles.searchInputBox}>
                <FontAwesome name="search" size={18} color="#777" />
                <Text style={styles.searchInput} >Where to?</Text>
            </View>

            <ScrollView 
            style={styles.cardContainer} 
            showsVerticalScrollIndicator={false}>
                {
                    locations.map((location, index) => {
                        return (
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
