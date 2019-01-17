import {
    //P1
    MODIFICA_TURNO,
    MODIFICA_MICROAREA,
    MODIFICA_TIPO_IMOVEL,
    MODIFICA_NUMERO_PRONTUARIO,
    MODIFICA_CNS,
    MODIFICA_DATA,
    MODIFICA_SEXO,
    MODIFICA_PESO,
    MODIFICA_ALTURA,
    MODIFICA_VISITA_COMPARTILHADA,
    //P2
    MODIFICA_CADASTRAMENTO_ATUALIZACAO,
    MODIFICA_VISITA_PERIODICA,
    MODIFICA_CONSULTA,
    MODIFICA_EXAME,
    MODIFICA_VACINA,
    MODIFICA_BOLSA_FAMILIA,
    //P3
} from './types'

//P1
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
//P2
export const modificaCadastramentoAtualizacao = (value) => {
    return {type: MODIFICA_CADASTRAMENTO_ATUALIZACAO, payload: value}
}
export const modificaVisitaPeriodica = (value) => {
    return {type: MODIFICA_VISITA_PERIODICA, payload: value}
}
export const modificaConsulta = (value) => {
    return {type: MODIFICA_CONSULTA, payload: value}
}
export const modificaExame = (value) => {
    return {type: MODIFICA_EXAME, payload: value}
}
export const modificaVacina = (value) => {
    return {type: MODIFICA_VACINA, payload: value}
}
export const modificaBolsaFamilia = (value) => {
    return {type: MODIFICA_BOLSA_FAMILIA, payload: value}
}
//P3