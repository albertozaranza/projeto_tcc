const INITIAL_STATE = {
    microarea: '',
    checked: false,
    selected: '',
    date: '',
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'modifica_microarea'){
        return {
            ...state,
            microarea: action.payload
        }
    }
    if(action.type == 'modifica_visita_compartilhada'){
        return {
            ...state,
            checked: action.payload
        }
    }
    if(action.type == 'modifica_picker'){
        return {
            ...state,
            selected: action.payload
        }
    }
    if(action.type == 'modifica_data'){
        return {
            ...state,
            date: action.payload
        }
    }
    return state
}