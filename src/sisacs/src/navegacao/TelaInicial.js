import React, {Component} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native'

export default class TelaInicial extends Component {
    static navigationOptions = {
        title: 'SISACS',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    Bem vindo, agente!
                </Text>
                <Button title="Ficha de Visita Domiciliar e Territorial" onPress={() => this.props.navigation.navigate('F1P1')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});