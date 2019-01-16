import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    FALHA_LOGIN
} from '../actions/types'


const INITIAL_STATE = {
    email: '',
    senha: '',
    erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MODIFICA_EMAIL:
            return {...state, email: action.payload}
        case MODIFICA_SENHA:
            return {...state, senha: action.payload}
        case FALHA_LOGIN:
            return {...state, erroLogin: action.payload}
        default:
            return state
    }
}