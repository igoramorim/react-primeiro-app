/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Simples from './componentes/Simples';
import BlinkApp from './componentes/BlinkApp';
import Padrao from './estilo/Padrao';
import FixedSize from './componentes/FixedSize';
import FlexSize from './componentes/FlexSize';
import FlexDirection from './componentes/FlexDirection';
import Translator from './componentes/Translator';
import ButtonAlert from './componentes/ButtonAlert';

export default class App extends Component {
  render() {
    return (
      // <View style={Padrao.container}>
      //   <Text style={Padrao.welcome}>Welcome to React Native, Igor!!!</Text>
      //   <Simples texto='texto props'></Simples>
      //   <BlinkApp></BlinkApp>
      // </View>

      // <FixedSize></FixedSize>

      // <FlexSize></FlexSize>

      // <FlexDirection></FlexDirection>

      // <Translator></Translator>

      <ButtonAlert texto='This is an alert!'></ButtonAlert>
    );
  }
}
