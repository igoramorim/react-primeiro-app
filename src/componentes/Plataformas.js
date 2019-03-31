import React, { Component } from 'react';
import { Alert, Button, View, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert('Informação', msg);
        }
    }

    return (
        <Button
            title='Plataforma?'
            onPress={() => notificar(Platform.OS)}>
        </Button>
    )
}