export const modificaMicroarea = (texto) => {
    return {
        type: 'modifica_microarea',
        payload: texto
    }
}

export const modificaVisita = (valor) => {
    return {
        type: 'modifica_visita_compartilhada',
        payload: valor
    }
}

export const modificaPicker = (opcao) => {
    return {
        type: 'modifica_picker',
        payload: opcao
    }
}

export const modificaData = (data) => {
    return {
        type: 'modifica_data',
        payload: data
    }
}