// Import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// this line is to get rid of the annoying yellow box warning.
console.ignoredYellowBox = ['Remote debugger'];
// Create a component
const App = () => (
  // flex:1 must-have with ScrollView. It takes the whole width of a space

  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
