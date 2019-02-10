import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'
import {connect} from 'react-redux'
import {
    modificaSintomaticosRespiratorios,
    modificaTabagista,
    modificaDomiciliadosAcamados,
    modificaVulnerabilidadeSocial,
    modificaCondicionalidadesBolsaFamilia,
    modificaSaudeMental,
    modificaUsuarioAlcoolico,
    modificaUsuarioDrogas
} from '../../../actions/F1Actions'

class F1P4 extends Component {
    static navigationOptions = {
        title: 'Motivo da visita',
    }
    constructor(props) {
        super(props)
        this.state = { checked: false }
    }
    render() {
        const { goBack } = this.props.navigation
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <Text style={styles.titulo}>Acompanhamento</Text>
                        <CheckBox
                            title='Sintomáticos respiratórios'
                            checked={this.props.sintomaticos_respiratorios}
                            onPress={() => this.props.modificaSintomaticosRespiratorios(!this.props.sintomaticos_respiratorios)}
                        />
                        <CheckBox
                            title='Tabagista'
                            checked={this.props.tabagista}
                            onPress={() => this.props.modificaTabagista(!this.props.tabagista)}
                        />
                        <CheckBox
                            title='Domiciliados / Acamados'
                            checked={this.props.domiciliados_acamados}
                            onPress={() => this.props.modificaDomiciliadosAcamados(!this.props.domiciliados_acamados)}
                        />
                        <CheckBox
                            title='Condições de vulnerabilidade social'
                            checked={this.props.vulnerabilidade_social}
                            onPress={() => this.props.modificaVulnerabilidadeSocial(!this.props.vulnerabilidade_social)}
                        />
                        <CheckBox
                            title='Condicionalidades do Bolsa Família'
                            checked={this.props.condicionalidades_bolsa_família}
                            onPress={() => this.props.modificaCondicionalidadesBolsaFamilia(!this.props.condicionalidades_bolsa_família)}
                        />
                        <CheckBox
                            title='Saúde mental'
                            checked={this.props.saude_mental}
                            onPress={() => this.props.modificaSaudeMental(!this.props.saude_mental)}
                        />
                        <CheckBox
                            title='Usuário de álcool'
                            checked={this.props.usuario_alcoolico}
                            onPress={() => this.props.modificaUsuarioAlcoolico(!this.props.usuario_alcoolico)}
                        />
                        <CheckBox
                            title='Usuário de outras drogas'
                            checked={this.props.usuario_drogas}
                            onPress={() => this.props.modificaUsuarioDrogas(!this.props.usuario_drogas)}
                        />
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button title='Voltar' onPress={() => goBack()}/>
                            <Button title='Próximo' onPress={() => this.props.navigation.navigate('F1P5')}/>
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
    },
})

const mapStateToProps = (state) => (
    {
        sintomaticos_respiratorios: state.Form1Reducer.sintomaticos_respiratorios,
        tabagista: state.Form1Reducer.tabagista,
        domiciliados_acamados: state.Form1Reducer.domiciliados_acamados,
        vulnerabilidade_social: state.Form1Reducer.vulnerabilidade_social,
        condicionalidades_bolsa_família: state.Form1Reducer.condicionalidades_bolsa_família,
        saude_mental: state.Form1Reducer.saude_mental,
        usuario_alcoolico: state.Form1Reducer.usuario_alcoolico,
        usuario_drogas: state.Form1Reducer.usuario_drogas
    }
)

export default connect (mapStateToProps,
    {
        modificaSintomaticosRespiratorios,
        modificaTabagista,
        modificaDomiciliadosAcamados,
        modificaVulnerabilidadeSocial,
        modificaCondicionalidadesBolsaFamilia,
        modificaSaudeMental,
        modificaUsuarioAlcoolico,
        modificaUsuarioDrogas
    }
)(F1P4)