import {
    MODIFICA_TURNO,
    MODIFICA_MICROAREA,
    MODIFICA_TIPO_IMOVEL,
    MODIFICA_NUMERO_PRONTUARIO,
    MODIFICA_CNS,
    MODIFICA_DATA,
    MODIFICA_SEXO,
    MODIFICA_PESO,
    MODIFICA_ALTURA,
    MODIFICA_VISITA_COMPARTILHADA
} from '../actions/types'

const INITIAL_STATE = {
    turno: '',
    microarea: '',
    tipo_imovel: '',
    numero_prontuario: '',
    cns: '',
    data: '',
    sexo: '',
    peso: '',
    altura: '',
    visita_compartilhada: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MODIFICA_TURNO:
            return {...state, turno: action.payload}
        case MODIFICA_MICROAREA:
            return {...state, microarea: action.payload}
        case MODIFICA_TIPO_IMOVEL:
            return {...state, tipo_imovel: action.payload}
        case MODIFICA_NUMERO_PRONTUARIO:
            return {...state, numero_prontuario: action.payload}
        case MODIFICA_CNS:
            return {...state, cns: action.payload}
        case MODIFICA_DATA:
            return {...state, data: action.payload}    
        case MODIFICA_SEXO:
            return {...state, sexo: action.payload}    
        case MODIFICA_PESO:
            return {...state, peso: action.payload}    
        case MODIFICA_ALTURA:
            return {...state, altura: action.payload}    
        case MODIFICA_VISITA_COMPARTILHADA:
            return {...state, visita_compartilhada: action.payload}
        default:
            return state
    }
}
