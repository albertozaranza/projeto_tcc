import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    FALHA_LOGIN,
    LOADING_LOGIN
} from '../actions/types'


const INITIAL_STATE = {
    email: '',
    senha: '',
    erroLogin: '',
    loadingLogin: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MODIFICA_EMAIL:
            return {...state, email: action.payload}
        case MODIFICA_SENHA:
            return {...state, senha: action.payload}
        case FALHA_LOGIN:
            return {...state, erroLogin: action.payload, loadingLogin: false}
        case LOADING_LOGIN:
            return {...state, loadingLogin: true}
        default:
            return state
    }
}
