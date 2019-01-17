import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';
import RadioForm  from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaskService } from 'react-native-masked-text'
import {connect} from 'react-redux'
import {
    modificaTurno,
    modificaMicroarea,
    modificaTipoImovel,
    modificaNumeroProntuario,
    modificaCNS,
    modificaData,
    modificaSexo,
    modificaPeso,
    modificaAltura,    
    modificaVisitaCompartilhada
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
        title: 'Informações Básicas'
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
    mascararData = (value) => {
        let novaData = MaskService.toMask('datetime', value, {format: 'DD/MM/YYYY'})
        this.props.modificaData(novaData)
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
                            onPress={value => this.props.modificaTurno(value)}
                        />
                    </View>
                    <Text style={styles.titulo}>Microárea</Text>
                    <TextInput
                        value={this.props.microarea}
                        onChangeText={value => this.props.modificaMicroarea(value)}
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='1'
                        onSubmitEditing={() => this.focusNextField('2')}
                    />
                    <Text style={styles.titulo}>Tipo do Imóvel</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.props.tipo_imovel}
                            onValueChange={selected => this.props.modificaTipoImovel(selected)}>
                                {options.map((item, index) => {
                                    return (< Picker.Item label={item} value={index} key={index} />);
                                })}
                        </Picker>
                    </View>
                    <Text style={styles.titulo}>Número do Prontuário</Text>
                    <TextInput
                        value={this.props.numero_prontuario}
                        onChangeText={value => this.props.modificaNumeroProntuario(value)}
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='2'
                        onSubmitEditing={() => this.focusNextField('3')}
                    />
                    <Text style={styles.titulo}>CNS do Cidadão</Text>
                    <TextInput 
                        value={this.props.cns}
                        onChangeText={value => this.props.modificaCNS(value)}
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='3'
                        onSubmitEditing={() => this.focusNextField('4')}
                    />
                    <Text style={styles.titulo}>Data de Nascimento</Text>
                    <TextInput 
                        value={this.props.data}
                        onChangeText={value => this.mascararData(value)}
                        style={styles.inputContainer}
                        returnKeyType={'next'}
                        ref='4'
                        onSubmitEditing={() => this.focusNextField('5')}
                    />
                    <Text style={styles.titulo}>Sexo</Text>
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <RadioForm
                            radio_props={radio_props_sexo}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            animation={false}
                            labelStyle={{fontSize: 18, marginRight: 20}}
                            onPress={(value) => this.props.modificaSexo(value)}
                        />
                    </View>
                    <Text style={styles.titulo}>Peso (kg)</Text>
                    <TextInput
                        value={this.props.peso}
                        onChangeText={value => this.props.modificaPeso(value)}
                        style={styles.inputContainer}
                        keyboardType={'number-pad'}
                        returnKeyType={'next'}
                        ref='5'
                        onSubmitEditing={() => this.focusNextField('6')}
                    />
                    <Text style={styles.titulo}>Altura (cm)</Text>
                    <TextInput
                        value={this.props.altura}
                        onChangeText={value => this.props.modificaAltura(value)}
                        style={styles.inputContainer}
                        keyboardType={'number-pad'}
                        returnKeyType={'done'}
                        ref='6'
                    />
                    <View style={{marginTop: 16}}>
                        <CheckBox
                            title='Visita compartilhada com outro profissional'
                            checked={this.props.visita_compartilhada}
                            onPress={() => this.props.modificaVisitaCompartilhada(!this.props.visita_compartilhada)}
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
        turno: state.Form1Reducer.turno,
        microarea: state.Form1Reducer.microarea,
        tipo_imovel: state.Form1Reducer.tipo_imovel,
        numero_prontuario: state.Form1Reducer.numero_prontuario,
        cns: state.Form1Reducer.cns,
        data: state.Form1Reducer.data,
        sexo: state.Form1Reducer.sexo,
        peso: state.Form1Reducer.peso,
        altura: state.Form1Reducer.altura,
        visita_compartilhada: state.Form1Reducer.visita_compartilhada
    }
)

export default connect (mapStateToProps,
    {
        modificaTurno,
        modificaMicroarea,
        modificaTipoImovel,
        modificaNumeroProntuario,
        modificaCNS,
        modificaData,
        modificaSexo,
        modificaPeso,
        modificaAltura,    
        modificaVisitaCompartilhada
    }
)(F1P1)