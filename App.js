import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import store from './src/Store/store'
import CounterApp from './src/Components/CounterApp'
import { Provider } from 'react-redux'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterApp />
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