import React, {Component} from 'react'
import {Button, StyleSheet, View, Text, ActivityIndicator, ImageBackground} from 'react-native'
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
            <Button 
                color='#28a745' 
                title="Entrar" 
                onPress={() => this.autenticarUsuario()}/>
        )
    }
    render() {
        return (
            <ImageBackground source={require('../resources/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <Text style={{fontSize: 40, marginBottom: 20, fontWeight: 'bold', color: 'black'}}>
                        SISACS
                    </Text>
                    <View style={{backgroundColor: '#F8F8F8', margin: 16, padding: 16, borderRadius: 6, color: 'black'}}>
                        <View style={{alignItems: 'center', marginBottom: 8}}>
                            <Text style={{fontSize: 25}}>
                                Por favor, faça o login
                            </Text>
                        </View>
                        <TextInput
                            placeholder='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            style={styles.inputContainer}
                            keyboardType={'email-address'}
                            returnKeyType={'next'}
                            ref='1'
                            onSubmitEditing={() => this.focusNextField('2')}
                        />
                        <TextInput
                            placeholder='Senha'
                            value={this.state.senha}
                            onChangeText={senha => this.setState({senha})}
                            style={styles.inputContainer}
                            secureTextEntry
                            returnKeyType={'done'}
                            ref='2'
                        />
                        <Text style={{color: '#ff0000', fontSize: 18, marginVertical: 6}}>
                            {this.state.erroLogin.toString()}
                        </Text>
                        <View>
                            {this.renderBotaoLogin()}
                        </View>
                    </View>
                </View>                    
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        height: 40,
        width: 350,
        fontSize: 16,
        backgroundColor: 'white',
        marginVertical: 6
    }
})
