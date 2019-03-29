import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/Padrao';

// Componente baseado em funcao

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

export default (props) => {
    return <Text style={[Padrao.ex, Padrao.ex2]}>Arrow function: {props.texto}</Text>
}