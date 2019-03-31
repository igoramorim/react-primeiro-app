import React, { Component } from 'react';
import { View, Button, Text, Alert } from 'react-native';

export default class ButtonAlert extends Component {
    constructor(props) {
        super(props);
    }

    onPressButton() {
        Alert.alert(
            'Título',
            'Teste mensagem',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]
        );
    }
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{margin: 20}}>
                    <Button
                        onPress={this.onPressButton}
                        title="Press me!"
                    />
                </View>
                <Text style={{margin: 20}}>Param: {this.props.texto}</Text>
            </View>
        )
    }
}