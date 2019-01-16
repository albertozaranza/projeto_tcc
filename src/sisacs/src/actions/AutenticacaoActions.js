import firebase from '@firebase/app'
require('firebase/auth')
import NavigationService from '../navegacao/NavigationService';

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const autenticarUsuario = ({email, senha}) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => sucessoLogin(dispatch))
            .catch(erro => falhaLogin(erro, dispatch))
    }
    
}

const sucessoLogin = (dispatch) => {
    dispatch (
        {
            type: 'sucesso_login'
        }
    )
    NavigationService.reset('Home');
}

const falhaLogin = (erro, dispatch) => {
    dispatch (
        {
            type: 'falha_login',
            payload: erro.message
        }
    )
}