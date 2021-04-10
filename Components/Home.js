import React from 'react';
import { View, Text,StyleSheet, TextInput,Button} from 'react-native';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password:""
            
        }
    }
    submit(){
        console.warn("all values",this.state)
    }
    render() {
        return (
            <View>
                <TextInput style={styles.textBox}
                placeholder="Enter Name"
                onChangeText={(text)=>{this.setState({name:text})}}
                >
                </TextInput>
                <TextInput style={styles.textBox}
                placeholder="Enter Email"
                onChangeText={(text)=>{this.setState({email:text})}}
                >
                </TextInput>

                <TextInput style={styles.textBox}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text)=>{this.setState({password:text})}}
                >
                </TextInput>

                <Button title="submit" onPress={()=>{this.submit()}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textBox: {
            borderColor:'skyblue',
            borderWidth: 4,
            padding:10,
            width:250,
            marginVertical:20,
    }
})

export default Home;