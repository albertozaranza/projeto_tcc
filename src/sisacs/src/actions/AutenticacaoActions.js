import firebase from '@firebase/app'
require('firebase/auth')
import NavigationService from '../navegacao/NavigationService';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    FALHA_LOGIN
} from './types'

export const modificaEmail = (texto) => {
    return {type: MODIFICA_EMAIL, payload: texto}
}

export const modificaSenha = (texto) => {
    return {type: MODIFICA_SENHA, payload: texto}
}

export const autenticarUsuario = ({email, senha}) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => sucessoLogin())
            .catch(erro => falhaLogin(erro, dispatch))
    }
}

const sucessoLogin = () => {
    NavigationService.reset('Home');
}

const falhaLogin = (erro, dispatch) => {
    dispatch (
        {
            type: FALHA_LOGIN,
            payload: erro.message
        }
    )
}