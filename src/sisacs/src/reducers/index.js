import {combineReducers} from 'redux'
import form1Reducer from './form1Reducer'
import autenticacaoReducer from './autenticacaoReducer'

export default combineReducers ({
    form1Reducer: form1Reducer,
    autenticacaoReducer: autenticacaoReducer
});
