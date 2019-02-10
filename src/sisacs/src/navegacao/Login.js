import React, {Component} from 'react'
import {Button, StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import firebase from '@firebase/app'
require('firebase/auth')

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }
    constructor() {
        super()
        this.state = {
          email: '',
          senha: '',
          erroLogin: '',
          loadingLogin: false
        }
    }
    focusNextField = (nextField) => {
        this.refs[nextField].focus()
    }
    autenticarUsuario() {
        this.setState({loadingLogin: true})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch(erroLogin => this.setState({erroLogin, loadingLogin: false}))
    }
    renderBotaoLogin = () => {
        if(this.state.loadingLogin == true){
            return(
                <ActivityIndicator size='large' />
            )
        }
        return(
            <Button title="Fazer login" onPress={() => this.autenticarUsuario()}/>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>
                        Faça o login, por favor
                    </Text>
                </View>
                <TextInput
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    style={styles.inputContainer}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    ref='1'
                    onSubmitEditing={() => this.focusNextField('2')}
                />
                <TextInput
                    value={this.state.senha}
                    onChangeText={senha => this.setState({senha})}
                    style={styles.inputContainer}
                    secureTextEntry
                    returnKeyType={'done'}
                    ref='2'
                />
                <Text style={{color: '#ff0000', fontSize: 18}}>
                    {this.state.erroLogin.toString()}
                </Text>
                <View>
                    {this.renderBotaoLogin()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12
    },
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        margin: 2,
        height: 40,
        fontSize: 16
    }
})
