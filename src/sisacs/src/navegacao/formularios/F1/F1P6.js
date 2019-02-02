import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'
import RadioForm  from 'react-native-simple-radio-button'
import NavigationService from '../../NavigationService'
import {connect} from 'react-redux'
import {
    modificaEgressoInternacao,
    modificaConvite,
    modificaOrientacaoPrevencao,
    modificaOutros,
    modificaDesfecho
} from '../../../actions/F1Actions'

var radio_props_desfecho = [
    {label: 'Visita realizada', value: 0 },
    {label: 'Visita recusada', value: 1 },
    {label: 'Ausente', value: 2 }
]

class F1P6 extends Component {
    static navigationOptions = {
        title: 'Motivo da visita',
    }
    constructor(props) {
        super(props)
        this.state = { checked: false }
    }
    fp = () => {
        alert('Formulário submetido com sucesso!')
        return NavigationService.reset('TelaInicial')
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
                            onPress={() => this.props.modificaEgressoInternacao(!this.props.egresso_internacao)}
                        />
                        <CheckBox
                            title='Convite atividades coletivas/campanha de saúde'
                            checked={this.props.convite}
                            onPress={() => this.props.modificaConvite(!this.props.convite)}
                        />
                        <CheckBox
                            title='Orientação / prevenção'
                            checked={this.props.orientacao_prevencao}
                            onPress={() => this.props.modificaOrientacaoPrevencao(!this.props.orientacao_prevencao)}
                        />
                        <CheckBox
                            title='Outros'
                            checked={this.props.outros}
                            onPress={() => this.props.modificaOutros(!this.props.outros)}
                        />
                        <Text style={styles.titulo}>Desfecho</Text>
                        <View style={styles.container}>
                            <RadioForm
                                radio_props={radio_props_desfecho}
                                initial={0}
                                formHorizontal={false}
                                labelHorizontal={true}
                                animation={false}
                                labelStyle={{fontSize: 20, marginRight: 20}}
                                onPress={value => this.props.modificaDesfecho(value)}
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button title='Voltar' onPress={() => goBack()}/>
                            <Button title='Finalizar' onPress={() => this.fp()}/>
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
        modificaDesfecho
    }
)(F1P6)