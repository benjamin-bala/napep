import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons';

export default function LocationCard({location}) {
    return (
        <View style={styles.locationCard}>
            <View style={styles.locationIcon}>
                <Ionicons name="location" size={15} color="#fafafa" />
            </View>
            <View style={styles.locationDetails}>
                <Text style={styles.locationTitle}>{location.properties.name}</Text>
                <Text style={styles.locationText}>{location.properties.label}</Text>
            </View>
        </View>
    )
}
