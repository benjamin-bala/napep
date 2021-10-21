import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import DestinationSearch from './src/screens/DestinationSearch';

export default function App() {
  return (
    <SafeAreaView>
        <Home />
        {/*<DestinationSearch />*/}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
