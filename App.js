import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import store from './src/Redux/Store/store'
import { Provider } from 'react-redux'
import CounterApp from './src/Screens/CounterApp';
import APIApp from './src/Screens/APIApp';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                    <CounterApp/>
                     <APIApp/>
            </Provider>
        );
    }
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});