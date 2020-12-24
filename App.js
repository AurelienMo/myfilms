import React from 'react';
import { View, StatusBar } from 'react-native';
import Search from "./src/components/Search";

export default function App() {
  return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" backgroundColor="black" />
        <Search />
      </View>
  );
}
