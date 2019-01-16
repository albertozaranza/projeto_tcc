import {combineReducers} from 'redux'
import Form1Reducer from './Form1Reducer'
import AutenticacaoReducer from './AutenticacaoReducer'

export default combineReducers ({
    Form1Reducer: Form1Reducer,
    AutenticacaoReducer: AutenticacaoReducer
});
