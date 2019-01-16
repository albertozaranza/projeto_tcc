import React, {Component} from 'react';
import {Button, StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {
    modificaEmail, 
    modificaSenha,
    autenticarUsuario
} from '../actions/AutenticacaoActions'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }
    focusNextField = (nextField) => {
        this.refs[nextField].focus()
    }
    _autenticarUsuario() {
        const {email, senha} = this.props
        this.props.autenticarUsuario({email, senha})
    }
    renderBotaoLogin = () => {
        if(this.props.loadingLogin){
            return(
                <ActivityIndicator size='large' />
            )
        }
        return(
            <Button title="Fazer login" onPress={() => this._autenticarUsuario()}/>
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
                    value={this.props.email}
                    onChangeText={texto => this.props.modificaEmail(texto)}
                    style={styles.inputContainer}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    ref='1'
                    onSubmitEditing={() => this.focusNextField('2')}
                />
                <TextInput
                    value={this.props.senha}
                    onChangeText={texto => this.props.modificaSenha(texto)}
                    style={styles.inputContainer}
                    secureTextEntry
                    returnKeyType={'done'}
                    ref='2'
                />
                <Text style={{color: '#ff0000', fontSize: 18}}>
                    {this.props.erroLogin}
                </Text>
                <View>
                    {this.renderBotaoLogin()}
                </View>
            </View>
        );
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
});

const mapStateToProps = (state) => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin

    }
)

export default connect (mapStateToProps,
    {
        modificaEmail, 
        modificaSenha,
        autenticarUsuario
    }
)(Login)