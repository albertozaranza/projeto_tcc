import {
    MODIFICA_MICROAREA,
    MODIFICA_VISITA_COMPARTILHADA,
    MODIFICA_PICKER,
    MODIFICA_DATA
} from '../actions/types'

const INITIAL_STATE = {
    microarea: '',
    checked: false,
    selected: '',
    date: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MODIFICA_MICROAREA:
            return {...state, microarea: action.payload}
        case MODIFICA_VISITA_COMPARTILHADA:
            return {...state, checked: action.payload}
        case MODIFICA_PICKER:
            return {...state, selected: action.payload}
        case MODIFICA_DATA:
            return {...state, date: action.payload}
        default:
            return state
    }
}
