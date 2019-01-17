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
} from './types'

export const modificaTurno = (value) => {
    return {type: MODIFICA_TURNO, payload: value}
}
export const modificaMicroarea = (value) => {
    return {type: MODIFICA_MICROAREA, payload: value}
}
export const modificaTipoImovel = (value) => {
    return {type: MODIFICA_TIPO_IMOVEL, payload: value}
}
export const modificaNumeroProntuario = (value) => {
    return {type: MODIFICA_NUMERO_PRONTUARIO, payload: value}
}
export const modificaCNS = (value) => {
    return {type: MODIFICA_CNS, payload: value}
}
export const modificaData = (value) => {
    return {type: MODIFICA_DATA, payload: value}
}
export const modificaSexo = (value) => {
    return {type: MODIFICA_SEXO, payload: value}
}
export const modificaPeso = (value) => {
    return {type: MODIFICA_PESO, payload: value}
}
export const modificaAltura = (value) => {
    return {type: MODIFICA_ALTURA, payload: value}
}
export const modificaVisitaCompartilhada = (value) => {
    return {type: MODIFICA_VISITA_COMPARTILHADA, payload: value}
}