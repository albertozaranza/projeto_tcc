import React, {Component} from 'react'
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import firebase from '@firebase/app'
require('firebase/auth')

export default class TelaInicial extends Component {
    static navigationOptions = () => ({
        title: 'SISACS',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#28a745',
            borderBottomColor: '#f8f8f8',
            borderBottomWidth: 3
        },
        headerTitleStyle: {
            fontSize: 18
        },
        headerRight: 
            <TouchableOpacity
                style={{margin: 10, padding: 10}}
                onPress={() => firebase.auth().signOut()}>
                <Text style={{color: 'white'}}>
                    Sair
                </Text>
            </TouchableOpacity>
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    Bem vindo, {firebase.auth().currentUser.email}
                </Text>
                <Button 
                    color='#28a745'
                    title="Ficha de Visita Domiciliar e Territorial" 
                    onPress={() => this.props.navigation.navigate('F1P1')}/>
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