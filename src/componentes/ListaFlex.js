import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'Igor', nota: 7.9 },
    { id: 2, nome: 'Durval', nota: 1.4 },
    { id: 3, nome: 'Maria', nota: 6.8 },
    { id: 4, nome: 'James', nota: 8.4 },
    { id: 5, nome: 'João', nota: 6.9 },
    { id: 6, nome: 'José', nota: 5.2 },
    { id: 7, nome: 'Lucas', nota: 8.7 },
    { id: 8, nome: 'Osvaldo', nota: 6.1 },
    { id: 9, nome: 'Rosana', nota: 3.9 },

    { id: 11, nome: 'Igor', nota: 7.9 },
    { id: 12, nome: 'Durval', nota: 1.4 },
    { id: 13, nome: 'Maria', nota: 6.8 },
    { id: 14, nome: 'James', nota: 8.4 },
    { id: 15, nome: 'João', nota: 6.9 },
    { id: 16, nome: 'José', nota: 5.2 },
    { id: 17, nome: 'Lucas', nota: 8.7 },
    { id: 18, nome: 'Osvaldo', nota: 6.1 },
    { id: 19, nome: 'Rosana', nota: 3.9 },
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Testes Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around', // flex-end / flex-start / space-between / space-around

};

export const Aluno = props => {
    return(
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
        </View>
    )
}

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}></Aluno>
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}>
            </FlatList>
        </ScrollView>
    )
}