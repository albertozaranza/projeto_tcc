import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class F1P2 extends Component {
    static navigationOptions = {
        title: 'Motivo da visita',
    }
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    render() {
        const { goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <CheckBox
                            title='Cadastramento / Atualização'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Visita periódica'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />

                        <Text style={styles.titulo}>Busca ativa</Text>

                        <CheckBox
                            title='Consulta'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Exame'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Vacina'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Condicionalidades do Bolsa Família'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                    </ScrollView>
                    <View style={styles.botoes}>
                            <Button title='Voltar' onPress={() => goBack()}/>
                            <Button title='Próximo' onPress={() => this.props.navigation.navigate('F1P3')}/>
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
});