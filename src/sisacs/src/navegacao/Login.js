import React, {Component} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {
    modificaEmail, 
    modificaSenha
} from '../actions/UsuarioActions'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }
    focusNextField = (nextField) => {
        this.refs[nextField].focus()
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
                    returnKeyType={'next'}
                    ref='1'
                    onSubmitEditing={() => this.focusNextField('2')}
                />
                <TextInput
                    value={this.props.senha}
                    onChangeText={texto => this.props.modificaSenha(texto)}
                    style={styles.inputContainer}
                    returnKeyType={'next'}
                    ref='1'
                    onSubmitEditing={() => this.focusNextField('2')}
                />
                <Button title="Fazer login" onPress={() => this.props.navigation.navigate('Home')}/>
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
        email: state.usuarioReducer.email,
        senha: state.usuarioReducer.senha,
    }
)

export default connect (mapStateToProps,
    {
        modificaEmail, 
        modificaSenha
    }
)(Login)