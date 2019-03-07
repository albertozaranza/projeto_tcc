import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'
import {connect} from 'react-redux'
import {
    modificaAcaoEducativa,
    modificaImovelEmFoco,
    modificaAcaoMecanica,
    modificaTratamentoFocal
} from '../../../actions/F1Actions'

class F1P5 extends Component {
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
                        <Text style={styles.titulo}>Controle ambiental / vetorial</Text>
                        <CheckBox
                            title='Ação educativa'
                            checked={this.props.acao_educativa}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaAcaoEducativa(!this.props.acao_educativa)}/>
                        <CheckBox
                            title='Imóvel com foco'
                            checked={this.props.imovel_em_foco}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaImovelEmFoco(!this.props.imovel_em_foco)}/>
                        <CheckBox
                            title='Ação mecânica'
                            checked={this.props.acao_mecanica}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaAcaoMecanica(!this.props.acao_mecanica)}/>
                        <CheckBox
                            title='Tratamento focal'
                            checked={this.props.tratamento_focal}
                            checkedColor='#28a745'
                            onPress={() => this.props.modificaTratamentoFocal(!this.props.tratamento_focal)}/>
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button color='#28a745' title='Voltar' onPress={() => goBack()}/>
                            <Button color='#28a745' title='Próximo' onPress={() => this.props.navigation.navigate('F1P6')}/>
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
        acao_educativa: state.Form1Reducer.acao_educativa,
        imovel_em_foco: state.Form1Reducer.imovel_em_foco,
        acao_mecanica: state.Form1Reducer.acao_mecanica,
        tratamento_focal: state.Form1Reducer.tratamento_focal
    }
)

export default connect (mapStateToProps,
    {
        modificaAcaoEducativa,
        modificaImovelEmFoco,
        modificaAcaoMecanica,
        modificaTratamentoFocal
    }
)(F1P5)