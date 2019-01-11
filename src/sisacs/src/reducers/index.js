import {combineReducers} from 'redux'
import form1Reducer from './form1Reducer'
import usuarioReducer from './usuarioReducer'

export default combineReducers ({
    form1Reducer: form1Reducer,
    usuarioReducer: usuarioReducer
});
