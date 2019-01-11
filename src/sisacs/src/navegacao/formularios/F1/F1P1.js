import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Picker, Item} from 'react-native';
import RadioForm  from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInputMask } from 'react-native-masked-text'
import {connect} from 'react-redux'
import {
    modificaVisita, 
    modificaMicroarea, 
    modificaPicker,
    modificaData
} from '../../../actions/F1Actions'

var radio_props_turno = [
    {label: 'Manhã', value: 0 },
    {label: 'Tarde', value: 1 },
    {label: 'Noite', value: 2 }
];

var radio_props_sexo = [
    {label: 'Masculino', value: 0 },
    {label: 'Feminino', value: 1 }
];

var options = [
    "Domicilio",
    "Comércio",
    "Terreno Baldio",
    "Ponto Estratégico",
    "Escola",
    "Creche",
    "Abrigo",
    "Instituição de longa permanência para idosos",
    "Unidade prisional",
    "Unidade de medido socioeducativa",
    "Delegacia",
    "Estabelecimento religioso",
    "Outros",
];

class F1P1 extends Component {
    static navigationOptions = {
        title: 'Informações Básicas',
    }
    focusNextField = (nextField) => {
        this.refs[nextField].focus()
    }
    getInitialChoice = () => {
        let date = new Date()
        let n = date.getHours()
        if(n >= 0 && n < 12){
            return 0
        }else if( n >= 12 && n < 18 ){
            return 1
        }else if(n >= 18 && n < 23){
            return 2
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <Text style={styles.titulo}>Turno</Text>
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <RadioForm
                            radio_props={radio_props_turno}
                            initial={this.getInitialChoice()}
                            formHorizontal={true}
                            labelHorizontal={true}
                            animation={false}
                            labelStyle={{fontSize: 18, marginRight: 20}}
                            onPress={value => this.setState({value:value})}
                        />
                    </View>
                    <Text style={styles.titulo}>Microárea</Text>
                    <TextInput
                        value={this.props.microarea}
                        onChangeText={texto => this.props.modificaMicroarea(texto)}
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='1'
                        onSubmitEditing={() => this.focusNextField('2')}
                    />
                    <View style={styles.pickerContainer}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.props.selected}
                            onValueChange={selected => this.props.modificaPicker(selected)}>
                                {options.map((item, index) => {
                                    return (< Picker.Item label={item} value={index} key={index} />);
                                })}
                        </Picker>
                    </View>
                    <Text style={styles.titulo}>Número do Prontuário</Text>
                    <TextInput 
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='2'
                        onSubmitEditing={() => this.focusNextField('3')}
                    />
                    <Text style={styles.titulo}>CNS do Cidadão</Text>
                    <TextInput 
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='3'
                        onSubmitEditing={() => this.focusNextField('4')}
                    />
                    <Text style={styles.titulo}>Data de Nascimento</Text>
                    <TextInputMask 
                        style={styles.inputContainer}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={this.props.date}
                        onChangeText={date => this.props.modificaData(date)}/>
                    <Text style={styles.titulo}>Sexo</Text>
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <RadioForm
                            radio_props={radio_props_sexo}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            animation={false}
                            labelStyle={{fontSize: 18, marginRight: 20}}
                            onPress={(value) => this.setState({value:value})}
                        />
                    </View>
                    <Text style={styles.titulo}>Peso (kg)</Text>
                    <TextInput
                        style={styles.inputContainer}
                        keyboardType={'number-pad'}
                        returnKeyType={'next'}
                        ref='4'
                        onSubmitEditing={() => this.focusNextField('5')}
                    />
                    <Text style={styles.titulo}>Altura (cm)</Text>
                    <TextInput
                        style={styles.inputContainer}
                        keyboardType={'number-pad'}
                        returnKeyType={'done'}
                        ref='5'
                    />
                    <View style={{marginTop: 16}}>
                        <CheckBox
                            title='Visita compartilhada com outro profissional'
                            checked={this.props.checked}
                            onPress={() => this.props.modificaVisita(!this.props.checked)}
                        />
                    </View>
                    <View style={styles.botao}>
                        <Button title='Próximo' onPress={() => this.props.navigation.navigate('F1P2')}/>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    titulo: {
        fontSize: 20,
        marginVertical: 8
    },
    opcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    opcoesTexto: {
        fontSize: 16
    },
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        margin: 2,
        height: 40,
        fontSize: 16
    },
    pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 16,
        marginHorizontal: 2
    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        margin: 20
    }
});

const mapStateToProps = (state) => (
    {
        microarea: state.form1Reducer.microarea,
        checked: state.form1Reducer.checked,
        selected: state.form1Reducer.selected,
        date: state.form1Reducer.date
    }
)

export default connect (mapStateToProps,
    {
        modificaVisita, 
        modificaMicroarea,
        modificaPicker,
        modificaData
    }
)(F1P1)