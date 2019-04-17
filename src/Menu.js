import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import BlinkApp from './componentes/BlinkApp';
import FixedSize from './componentes/FixedSize';
import FlexSize from './componentes/FlexSize';
import FlexDirection from './componentes/FlexDirection';
import Translator from './componentes/Translator';
import ButtonAlert from './componentes/ButtonAlert';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';
import ShareExample from './componentes/ShareExample'

export default createDrawerNavigator({
    ShareExample: {
        screen: () => <ShareExample></ShareExample>,
        navigationOptions: { title: 'Share' }
    },
    Flex: {
        screen: () => <Flex></Flex>,
        navigationOptions: { title: 'Flex' }
    },
    ListaFlex: {
        screen: () => <ListaFlex></ListaFlex>,
        navigationOptions: { title: 'Lista Flex' }
    },
    ValidarProps: {
        screen: () => <ValidarProps ano='teste' label='igor: '></ValidarProps>,
        navigationOptions: { title: 'Validar Props' }
    },
    Plataformas: {
        screen: () => <Plataformas></Plataformas>,
        navigationOptions: { title: 'Plataformas' }
    },
    Contador: {
        screen: () => <Contador></Contador>,
        navigationOptions: { title: 'Contador' }
    },
    ButtonAlert: {
        screen: () => <ButtonAlert texto='This is an alert!'></ButtonAlert>,
        navigationOptions: { title: 'Button Alert' }
    },
    Translator: {
        screen: () => <Translator></Translator>,
        navigationOptions: { title: 'Translator' }
    },
    FlexDirection: {
        screen: () => <FlexDirection></FlexDirection>,
        navigationOptions: { title: 'FlexDirection' }
    },
    FlexSize: {
        screen: () => <FlexSize></FlexSize>,
        navigationOptions: { title: 'FlexSize' }
    },
    FixedSize: {
        screen: () => <FixedSize></FixedSize>,
        navigationOptions: { title: 'FixedSize' }
    },
    BlinkApp: {
        screen: () => <BlinkApp></BlinkApp>,
        navigationOptions: { title: 'BlinkApp' }
    },
    Simples: {
        screen: () => <Simples texto='texto props'></Simples>,
        navigationOptions: { title: 'Simples' }
    }
}, { drawerWidth: 300 })