import React, {Component} from 'react'
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import firebase from '@firebase/app'
require('firebase/auth')

export default class TelaInicial extends Component {
    static navigationOptions = () => ({
        title: 'SISACS',
        headerRight: 
            <TouchableOpacity
                style={{margin: 10, padding: 10}}
                onPress={() => firebase.auth().signOut()}>
                <Text>Sair</Text>
            </TouchableOpacity>
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    Bem vindo, {firebase.auth().currentUser.email}
                </Text>
                <Button title="Ficha de Visita Domiciliar e Territorial" onPress={() => this.props.navigation.navigate('F1P1')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})