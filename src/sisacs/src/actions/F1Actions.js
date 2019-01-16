import {
    MODIFICA_MICROAREA,
    MODIFICA_VISITA_COMPARTILHADA,
    MODIFICA_PICKER,
    MODIFICA_DATA
} from './types'

export const modificaMicroarea = (texto) => {
    return {type: MODIFICA_MICROAREA, payload: texto}
}

export const modificaVisita = (valor) => {
    return {type: MODIFICA_VISITA_COMPARTILHADA, payload: valor}
}

export const modificaPicker = (opcao) => {
    return {type: MODIFICA_PICKER, payload: opcao}
}

export const modificaData = (data) => {
    return {type: MODIFICA_DATA, payload: data}
}