import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: 0
    }

    somar = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    // Diferença entre a funcao ser arrow e não
    // Olhar chamada onPress abaixo
    subtrair() {
        this.setState({ numero: this.state.numero - 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    // onPress={this.somar}
                    onPress={() => this.subtrair()}

                    // Chamada abaixo gera erro
                    // O retorno de this.subtrair() seria passado para onPress
                    // onPress={this.subtrair()}

                    onLongPress={this.limpar}>
                    <Text>Somar / Limpar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}