import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Home/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    fontSize: 50
  }
});


export default App;
