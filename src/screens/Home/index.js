import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import Map from '../../components/Map'
import HomeSearch from '../../components/HomeSearch'

export default function Home() {
    return (
        <View style={styles.container}>
            <Map mapStyle={styles.map}/>
            <HomeSearch />
        </View>
    )
}
