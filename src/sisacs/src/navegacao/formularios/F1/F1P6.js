import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import { CheckBox } from 'react-native-elements'
import RadioForm  from 'react-native-simple-radio-button';
import NavigationService from '../../NavigationService';

var radio_props_desfecho = [
    {label: 'Visita realizada', value: 0 },
    {label: 'Visita recusada', value: 1 },
    {label: 'Ausente', value: 2 }
];

export default class F1P6 extends Component {
    static navigationOptions = {
        title: 'Motivo da visita',
    }
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    fp = () => {
        alert('Formulário submetido com sucesso!')
        return NavigationService.reset('Home');
    }
    render() {
        const { goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <CheckBox
                            title='Egresso de Internação'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Convite atividades coletivas/campanha de saúde'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Orientação / prevenção'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <CheckBox
                            title='Outros'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
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
                                onPress={(value) => {this.setState({value:value})}}
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
});