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
    MODIFICA_GESTANTE,
    MODIFICA_PUEPERA,
    MODIFICA_RECEM_NASCIDO,
    MODIFICA_CRIANCA,
    MODIFICA_DESNUTRICAO,
    MODIFICA_REABILITACAO_DEFICIENTE,
    MODIFICA_HIPERTENSAO,
    MODIFICA_DIABETES,
    MODIFICA_ASMA,
    MODIFICA_DPOC_ENFISEMA,
    MODIFICA_CANCER,
    MODIFICA_DOENCA_CRONICA,
    MODIFICA_HANSENIASE,
    MODIFICA_TUBERCULOSE,
    //P4
    MODIFICA_SINTOMATICOS_RESPIRATORIOS,
    MODIFICA_TABAGISTA,
    MODIFICA_DOMICILIADOS_ACAMADOS,
    MODIFICA_VULNERABILIDADE_SOCIAL,
    MODIFICA_CONDICIONALIDADES_BOLSA_FAMILIA,
    MODIFICA_SAUDE_MENTAL,
    MODIFICA_USUARIO_ALCOOLICO,
    MODIFICA_USUARIO_DROGAS,
    //P5
    MODIFICA_ACAO_EDUCATIVA,
    MODIFICA_IMOVEL_EM_FOCO,
    MODIFICA_ACAO_MECANICA,
    MODIFICA_TRATAMENTO_FOCAL,
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
export const modificaGestante = (value) => {
    return {type: MODIFICA_GESTANTE, payload: value}
}
export const modificaPuepera = (value) => {
    return {type: MODIFICA_PUEPERA, payload: value}
}
export const modificaRecemNascido = (value) => {
    return {type: MODIFICA_RECEM_NASCIDO, payload: value}
}
export const modificaCrianca = (value) => {
    return {type: MODIFICA_CRIANCA, payload: value}
}
export const modificaDesnutricao = (value) => {
    return {type: MODIFICA_DESNUTRICAO, payload: value}
}
export const modificaReabilitacaoDeficiente = (value) => {
    return {type: MODIFICA_REABILITACAO_DEFICIENTE, payload: value}
}
export const modificaHispertensao = (value) => {
    return {type: MODIFICA_HIPERTENSAO, payload: value}
}
export const modificaDiabetes = (value) => {
    return {type: MODIFICA_DIABETES, payload: value}
}
export const modificaAsma = (value) => {
    return {type: MODIFICA_ASMA, payload: value}
}
export const modificaDpocEnfisema = (value) => {
    return {type: MODIFICA_DPOC_ENFISEMA, payload: value}
}
export const modificaCancer = (value) => {
    return {type: MODIFICA_CANCER, payload: value}
}
export const modificaDoencaCronica = (value) => {
    return {type: MODIFICA_DOENCA_CRONICA, payload: value}
}
export const modificaHanseniase = (value) => {
    return {type: MODIFICA_HANSENIASE, payload: value}
}
export const modificaTuberculose = (value) => {
    return {type: MODIFICA_TUBERCULOSE, payload: value}
}
//P4
export const modificaSintomaticosRespiratorios = (value) => {
    return {type: MODIFICA_SINTOMATICOS_RESPIRATORIOS, payload: value}
}
export const modificaTabagista = (value) => {
    return {type: MODIFICA_TABAGISTA, payload: value}
}
export const modificaDomiciliadosAcamados = (value) => {
    return {type: MODIFICA_DOMICILIADOS_ACAMADOS, payload: value}
}
export const modificaVulnerabilidadeSocial = (value) => {
    return {type: MODIFICA_VULNERABILIDADE_SOCIAL, payload: value}
}
export const modificaCondicionalidadesBolsaFamilia = (value) => {
    return {type: MODIFICA_CONDICIONALIDADES_BOLSA_FAMILIA, payload: value}
}
export const modificaSaudeMental = (value) => {
    return {type: MODIFICA_SAUDE_MENTAL, payload: value}
}
export const modificaUsuarioAlcoolico = (value) => {
    return {type: MODIFICA_USUARIO_ALCOOLICO, payload: value}
}
export const modificaUsuarioDrogas = (value) => {
    return {type: MODIFICA_USUARIO_DROGAS, payload: value}
}
//P5
export const modificaAcaoEducativa = (value) => {
    return {type: MODIFICA_ACAO_EDUCATIVA, payload: value}
}
export const modificaImovelEmFoco = (value) => {
    return {type: MODIFICA_IMOVEL_EM_FOCO, payload: value}
}
export const modificaAcaoMecanica = (value) => {
    return {type: MODIFICA_ACAO_MECANICA, payload: value}
}
export const modificaTratamentoFocal = (value) => {
    return {type: MODIFICA_TRATAMENTO_FOCAL, payload: value}
}