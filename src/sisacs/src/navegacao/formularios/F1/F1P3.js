import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'
import {connect} from 'react-redux'
import {
    modificaGestante,
    modificaPuepera,
    modificaRecemNascido,
    modificaCrianca,
    modificaDesnutricao,
    modificaReabilitacaoDeficiente,
    modificaHispertensao,
    modificaDiabetes,
    modificaAsma,
    modificaDpocEnfisema,
    modificaCancer,
    modificaDoencaCronica,
    modificaHanseniase,
    modificaTuberculose
} from '../../../actions/F1Actions'

class F1P3 extends Component {
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
                        <Text style={styles.titulo}>Acompanhamento</Text>
                        <CheckBox
                            title='Gestante'
                            checked={this.props.gestante}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaGestante(!this.props.gestante)}/>
                        <CheckBox
                            title='Puérpera'
                            checked={this.props.puepera}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaPuepera(!this.props.puepera)}/>
                        <CheckBox
                            title='Recém-nascido'
                            checked={this.props.recem_nascido}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaRecemNascido(!this.props.recem_nascido)}/>
                        <CheckBox
                            title='Criança'
                            checked={this.props.crianca}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaCrianca(!this.props.crianca)}/>
                        <Text style={styles.titulo}>Acompanhamentos especiais</Text>
                        <CheckBox
                            title='Pessoa com desnutrição'
                            checked={this.props.desnutricao}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaDesnutricao(!this.props.desnutricao)}/>
                        <CheckBox
                            title='Pessoa em reabilitação ou com deficiência'
                            checked={this.props.reabilitacao_deficiente}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaReabilitacaoDeficiente(!this.props.reabilitacao_deficiente)}/>
                        <CheckBox
                            title='Pessoa com hipertensão'
                            checked={this.props.hipertensao}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaHispertensao(!this.props.hipertensao)}/>
                        <CheckBox
                            title='Pessoa com diabetes'
                            checked={this.props.diabetes}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaDiabetes(!this.props.diabetes)}/>
                        <CheckBox
                            title='Pessoa com asma'
                            checked={this.props.asma}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaAsma(!this.props.asma)}/>
                        <CheckBox
                            title='Pessoa com DPOC/enfisema'
                            checked={this.props.dpoc_enfisema}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaDpocEnfisema(!this.props.dpoc_enfisema)}/>
                        <CheckBox
                            title='Pessoa com câncer'
                            checked={this.props.cancer}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaCancer(!this.props.cancer)}/>
                        <CheckBox
                            title='Pessoa com outras doenças crônicas'
                            checked={this.props.doenca_cronica}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaDoencaCronica(!this.props.doenca_cronica)}/>
                        <CheckBox
                            title='Pessoa com hanseníase'
                            checked={this.props.hanseniase}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaHanseniase(!this.props.hanseniase)}/>
                        <CheckBox
                            title='Pessoa com tuberculose'
                            checked={this.props.tuberculose}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaTuberculose(!this.props.tuberculose)}/>
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button color='#28a745' title='Voltar' onPress={() => goBack()}/>
                            <Button color='#28a745' title='Próximo' onPress={() => this.props.navigation.navigate('F1P4')}/>
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
        tuberculose: state.Form1Reducer.tuberculose
    }
)

export default connect (mapStateToProps,
    {
        modificaGestante,
        modificaPuepera,
        modificaRecemNascido,
        modificaCrianca,
        modificaDesnutricao,
        modificaReabilitacaoDeficiente,
        modificaHispertensao,
        modificaDiabetes,
        modificaAsma,
        modificaDpocEnfisema,
        modificaCancer,
        modificaDoencaCronica,
        modificaHanseniase,
        modificaTuberculose
    }
)(F1P3)