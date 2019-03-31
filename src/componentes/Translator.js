import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split('').reverse().join('')}
                </Text>
            </View>
        )
    }
}