import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'
import {connect} from 'react-redux'
import {
    modificaCadastramentoAtualizacao,
    modificaVisitaPeriodica,
    modificaConsulta,
    modificaExame,
    modificaVacina,
    modificaBolsaFamilia
} from '../../../actions/F1Actions'

class F1P2 extends Component {
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
    render() {
        const { goBack } = this.props.navigation
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <CheckBox
                            title='Cadastramento / Atualização'
                            checked={this.props.cadastramento_atualizacao}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaCadastramentoAtualizacao(!this.props.cadastramento_atualizacao)}/>
                        <CheckBox
                            title='Visita periódica'
                            checked={this.props.visita_periodica}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaVisitaPeriodica(!this.props.visita_periodica)}/>
                        <Text style={styles.titulo}>Busca ativa</Text>
                        <CheckBox
                            title='Consulta'
                            checked={this.props.consulta}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaConsulta(!this.props.consulta)}/>
                        <CheckBox
                            title='Exame'
                            checked={this.props.exame}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaExame(!this.props.exame)}/>
                        <CheckBox
                            title='Vacina'
                            checked={this.props.vacina}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaVacina(!this.props.vacina)}/>
                        <CheckBox
                            title='Condicionalidades do Bolsa Família'
                            checked={this.props.bolsa_familia}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaBolsaFamilia(!this.props.bolsa_familia)}/>
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button color='#28a745' title='Voltar' onPress={() => goBack()}/>
                            <Button color='#28a745' title='Próximo' onPress={() => this.props.navigation.navigate('F1P3')}/>
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
        cadastramento_atualizacao: state.Form1Reducer.cadastramento_atualizacao,
        visita_periodica: state.Form1Reducer.visita_periodica,
        consulta: state.Form1Reducer.consulta,
        exame: state.Form1Reducer.exame,
        vacina: state.Form1Reducer.vacina,
        bolsa_familia: state.Form1Reducer.bolsa_familia
    }
)

export default connect (mapStateToProps,
    {
        modificaCadastramentoAtualizacao,
        modificaVisitaPeriodica,
        modificaConsulta,
        modificaExame,
        modificaVacina,
        modificaBolsaFamilia
    }
)(F1P2)