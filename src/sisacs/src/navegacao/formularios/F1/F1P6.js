import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text, ActivityIndicator, YellowBox} from 'react-native'
import { CheckBox } from 'react-native-elements'
import RadioForm  from 'react-native-simple-radio-button'
import firebase from '@firebase/app'
require('firebase/database')
require('firebase/auth')
import base64 from 'react-native-base64'
import {connect} from 'react-redux'
import {
    modificaEgressoInternacao,
    modificaConvite,
    modificaOrientacaoPrevencao,
    modificaOutros,
    modificaDesfecho,
    enviarForm
} from '../../../actions/F1Actions'
import NavigationService from '../../NavigationService';

YellowBox.ignoreWarnings(['Setting a timer'])

var radio_props_desfecho = [
    {label: 'Visita realizada', value: 0 },
    {label: 'Visita recusada', value: 1 },
    {label: 'Ausente', value: 2 }
]

class F1P6 extends Component {
    static navigationOptions = {
        title: 'Motivo da visita',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#28a745',
            borderBottomColor: '#f8f8f8',
            borderBottomWidth: 3
        },
        headerTitleStyle: {
            fontSize: 18
        }
    }
    constructor(props) {
        super(props)
        this.state = { loading: false }
    }
    renderBotaoEnvio = () => {
        if(this.state.loading == true){
            return(
                <ActivityIndicator size='large' color='#28a745' />
            )
        }
        return(
            <Button color='#28a745' title='Finalizar' onPress={() => this.finalizar()}/>
        )
    }
    finalizar = () => {
        this.setState({loading: true})
        sucessoEnvio = () => {
            alert('Sucesso ao enviar dados!')
            return NavigationService.reset('TelaInicial')
        }

        let date = new Date()
        let dia = date.getDate()
        let mes = date.getMonth() + 1
        let ano = date.getFullYear()
        let hora = date.getHours()
        let minuto = date.getMinutes()
        let segundo = date.getSeconds()

        if (dia < 10) {
            dia = '0' + dia;
        }
        if (mes < 10) {
            mes = '0' + mes;
        }
        if (hora < 10) {
            hora = '0' + hora;
        }
        if (minuto < 10) {
            minuto = '0' + minuto;
        }
        if (segundo < 10) {
            segundo = '0' + segundo;
        }
        date = mes + '/' + dia + '/' + ano + ' - ' + hora + ':' + minuto + ':' + segundo

        let dados = {
            turno: this.props.turno,
            microarea: this.props.microarea,
            tipo_imovel: this.props.tipo_imovel,
            numero_prontuario: this.props.numero_prontuario,
            cns: this.props.cns,
            data_nascimento: this.props.data_nascimento,
            sexo: this.props.sexo,
            peso: this.props.peso,
            altura: this.props.altura,
            visita_compartilhada: this.props.visita_compartilhada,
            cadastramento_atualizacao: this.props.cadastramento_atualizacao,
            visita_periodica: this.props.visita_periodica,
            consulta: this.props.consulta,
            exame: this.props.exame,
            vacina: this.props.vacina,
            bolsa_familia: this.props.bolsa_familia,
            gestante: this.props.gestante,
            puepera: this.props.puepera,
            recem_nascido: this.props.recem_nascido,
            crianca: this.props.crianca,
            desnutricao: this.props.desnutricao,
            reabilitacao_deficiente: this.props.reabilitacao_deficiente,
            hipertensao: this.props.hipertensao,
            diabetes: this.props.diabetes,
            asma: this.props.asma,
            dpoc_enfisema: this.props.dpoc_enfisema,
            cancer: this.props.cancer,
            doenca_cronica: this.props.doenca_cronica,
            hanseniase: this.props.hanseniase,
            tuberculose: this.props.tuberculose,
            sintomaticos_respiratorios: this.props.sintomaticos_respiratorios,
            tabagista: this.props.tabagista,
            domiciliados_acamados: this.props.domiciliados_acamados,
            vulnerabilidade_social: this.props.vulnerabilidade_social,
            condicionalidades_bolsa_família: this.props.condicionalidades_bolsa_família,
            saude_mental: this.props.saude_mental,
            usuario_alcoolico: this.props.usuario_alcoolico,
            usuario_drogas: this.props.usuario_drogas,
            acao_educativa: this.props.acao_educativa,
            imovel_em_foco: this.props.imovel_em_foco,
            acao_mecanica: this.props.acao_mecanica,
            tratamento_focal: this.props.tratamento_focal,
            egresso_internacao: this.props.egresso_internacao,
            convite: this.props.convite,
            orientacao_prevencao: this.props.orientacao_prevencao,
            outros: this.props.outros,
            desfecho: this.props.desfecho,
            arquivado: false,
            horario_visita: date
        }
        firebase.database().ref(`agentes/${base64.encode(firebase.auth().currentUser.email)}`).push(dados)
            .then(() => sucessoEnvio())
            .catch(erro => alert(erro.message))
    }
    render() {
        const { goBack } = this.props.navigation
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <CheckBox
                            title='Egresso de Internação'
                            checked={this.props.egresso_internacao}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaEgressoInternacao(!this.props.egresso_internacao)}/>
                        <CheckBox
                            title='Convite atividades coletivas/campanha de saúde'
                            checked={this.props.convite}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaConvite(!this.props.convite)}/>
                        <CheckBox
                            title='Orientação / prevenção'
                            checked={this.props.orientacao_prevencao}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaOrientacaoPrevencao(!this.props.orientacao_prevencao)}/>
                        <CheckBox
                            title='Outros'
                            checked={this.props.outros}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaOutros(!this.props.outros)}/>
                        <Text style={styles.titulo}>Desfecho</Text>
                        <View style={styles.container}>
                            <RadioForm
                                radio_props={radio_props_desfecho}
                                initial={this.props.desfecho}
                                formHorizontal={false}
                                labelHorizontal={true}
                                animation={false}
                                labelStyle={{fontSize: 20, marginRight: 20}}
                                buttonColor={'#28a745'}
                                selectedButtonColor={'#28a745'}
                                onPress={value => this.props.modificaDesfecho(value)}/>
                        </View>
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button color='#28a745' title='Voltar' onPress={() => goBack()}/>
                            <View>
                                {this.renderBotaoEnvio()}
                            </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 8
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        margin: 20
    },
    titulo: {
        fontSize: 20,
        marginVertical: 8
    }
})

const mapStateToProps = (state) => (
    {
        turno: state.Form1Reducer.turno,
        microarea: state.Form1Reducer.microarea,
        tipo_imovel: state.Form1Reducer.tipo_imovel,
        numero_prontuario: state.Form1Reducer.numero_prontuario,
        cns: state.Form1Reducer.cns,
        data_nascimento: state.Form1Reducer.data_nascimento,
        sexo: state.Form1Reducer.sexo,
        peso: state.Form1Reducer.peso,
        altura: state.Form1Reducer.altura,
        visita_compartilhada: state.Form1Reducer.visita_compartilhada,
        cadastramento_atualizacao: state.Form1Reducer.cadastramento_atualizacao,
        visita_periodica: state.Form1Reducer.visita_periodica,
        consulta: state.Form1Reducer.consulta,
        exame: state.Form1Reducer.exame,
        vacina: state.Form1Reducer.vacina,
        bolsa_familia: state.Form1Reducer.bolsa_familia,
        gestante: state.Form1Reducer.gestante,
        puepera: state.Form1Reducer.puepera,
        recem_nascido: state.Form1Reducer.recem_nascido,
        crianca: state.Form1Reducer.crianca,
        desnutricao: state.Form1Reducer.desnutricao,
        reabilitacao_deficiente: state.Form1Reducer.reabilitacao_deficiente,
        hipertensao: state.Form1Reducer.hipertensao,
        diabetes: state.Form1Reducer.diabetes,
        asma: state.Form1Reducer.asma,
        dpoc_enfisema: state.Form1Reducer.dpoc_enfisema,
        cancer: state.Form1Reducer.cancer,
        doenca_cronica: state.Form1Reducer.doenca_cronica,
        hanseniase: state.Form1Reducer.hanseniase,
        tuberculose: state.Form1Reducer.tuberculose,
        sintomaticos_respiratorios: state.Form1Reducer.sintomaticos_respiratorios,
        tabagista: state.Form1Reducer.tabagista,
        domiciliados_acamados: state.Form1Reducer.domiciliados_acamados,
        vulnerabilidade_social: state.Form1Reducer.vulnerabilidade_social,
        condicionalidades_bolsa_família: state.Form1Reducer.condicionalidades_bolsa_família,
        saude_mental: state.Form1Reducer.saude_mental,
        usuario_alcoolico: state.Form1Reducer.usuario_alcoolico,
        usuario_drogas: state.Form1Reducer.usuario_drogas,
        acao_educativa: state.Form1Reducer.acao_educativa,
        imovel_em_foco: state.Form1Reducer.imovel_em_foco,
        acao_mecanica: state.Form1Reducer.acao_mecanica,
        tratamento_focal: state.Form1Reducer.tratamento_focal,
        egresso_internacao: state.Form1Reducer.egresso_internacao,
        convite: state.Form1Reducer.convite,
        orientacao_prevencao: state.Form1Reducer.orientacao_prevencao,
        outros: state.Form1Reducer.outros,
        desfecho: state.Form1Reducer.desfecho
    }
)

export default connect (mapStateToProps,
    {
        modificaEgressoInternacao,
        modificaConvite,
        modificaOrientacaoPrevencao,
        modificaOutros,
        modificaDesfecho,
        enviarForm
    }
)(F1P6)