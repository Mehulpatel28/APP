import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
class CounterApp extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize:20,borderRadius:30,backgroundColor:'#10b0d8',padding:15,marginRight:85 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30,marginTop:7}}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize:20,borderRadius:30,backgroundColor:'#10b0d8',padding:15,marginLeft:80 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50
    }
});