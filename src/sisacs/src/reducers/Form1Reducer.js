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
} from '../actions/types'

const INITIAL_STATE = {
    //P1
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
    //P2
    cadastramento_atualizacao: false,
    visita_periodica: false,
    consulta: false,
    exame: false,
    vacina: false,
    bolsa_familia: false,
    //P3
    gestante: false,
    puepera: false,
    recem_nascido: false,
    crianca: false,
    desnutricao: false,
    reabilitacao_deficiente: false,
    hipertensao: false,
    diabetes: false,
    asma: false,
    dpoc_enfisema: false,
    cancer: false,
    doenca_cronica: false,
    hanseniase: false,
    tuberculose: false,
    //P4
    sintomaticos_respiratorios: false,
    tabagista: false,
    domiciliados_acamados: false,
    vulnerabilidade_social: false,
    condicionalidades_bolsa_família: false,
    saude_mental: false,
    usuario_alcoolico: false,
    usuario_drogas: false,
    //P5
    acao_educativa: false,
    imovel_em_foco: false,
    acao_mecanica: false,
    tratamento_focal: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        //P1
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
        //P2
        case MODIFICA_CADASTRAMENTO_ATUALIZACAO:
            return {...state, cadastramento_atualizacao: action.payload}
        case MODIFICA_VISITA_PERIODICA:
            return {...state, visita_periodica: action.payload}
        case MODIFICA_CONSULTA:
            return {...state, consulta: action.payload}
        case MODIFICA_EXAME:
            return {...state, exame: action.payload}
        case MODIFICA_VACINA:
            return {...state, vacina: action.payload}
        case MODIFICA_BOLSA_FAMILIA:
            return {...state, bolsa_familia: action.payload}
        //P3
        case MODIFICA_GESTANTE:
            return {...state, gestante: action.payload}
        case MODIFICA_PUEPERA:
            return {...state, puepera: action.payload}
        case MODIFICA_RECEM_NASCIDO:
            return {...state, recem_nascido: action.payload}
        case MODIFICA_CRIANCA:
            return {...state, crianca: action.payload}
        case MODIFICA_DESNUTRICAO:
            return {...state, desnutricao: action.payload}
        case MODIFICA_REABILITACAO_DEFICIENTE:
            return {...state, reabilitacao_deficiente: action.payload}
        case MODIFICA_HIPERTENSAO:
            return {...state, hipertensao: action.payload}
        case MODIFICA_DIABETES:
            return {...state, diabetes: action.payload}
        case MODIFICA_ASMA:
            return {...state, asma: action.payload}
        case MODIFICA_DPOC_ENFISEMA:
            return {...state, dpoc_enfisema: action.payload}
        case MODIFICA_CANCER:
            return {...state, cancer: action.payload}
        case MODIFICA_DOENCA_CRONICA:
            return {...state, doenca_cronica: action.payload}
        case MODIFICA_HANSENIASE:
            return {...state, hanseniase: action.payload}
        case MODIFICA_TUBERCULOSE:
            return {...state, tuberculose: action.payload}
        //P4
        case MODIFICA_SINTOMATICOS_RESPIRATORIOS:
            return {...state, sintomaticos_respiratorios: action.payload}
        case MODIFICA_TABAGISTA:
            return {...state, tabagista: action.payload}
        case MODIFICA_DOMICILIADOS_ACAMADOS:
            return {...state, domiciliados_acamados: action.payload}
        case MODIFICA_VULNERABILIDADE_SOCIAL:
            return {...state, vulnerabilidade_social: action.payload}
        case MODIFICA_CONDICIONALIDADES_BOLSA_FAMILIA:
            return {...state, condicionalidades_bolsa_família: action.payload}
        case MODIFICA_SAUDE_MENTAL:
            return {...state, saude_mental: action.payload}
        case MODIFICA_USUARIO_ALCOOLICO:
            return {...state, usuario_alcoolico: action.payload}
        case MODIFICA_USUARIO_DROGAS:
            return {...state, usuario_drogas: action.payload}
        //P5
        case MODIFICA_ACAO_EDUCATIVA:
            return {...state, acao_educativa: action.payload}
        case MODIFICA_IMOVEL_EM_FOCO:
            return {...state, imovel_em_foco: action.payload}
        case MODIFICA_ACAO_MECANICA:
            return {...state, acao_mecanica: action.payload}
        case MODIFICA_TRATAMENTO_FOCAL:
            return {...state, tratamento_focal: action.payload}
        default:
            return state
    }
}
