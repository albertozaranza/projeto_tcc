import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class F1P4 extends Component {
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
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Tabagista'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Domiciliados / Acamados'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Condições de vulnerabilidade social'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Condicionalidades do Bolsa Família'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Saúde mental'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Usuário de álcool'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Usuário de outras drogas'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
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