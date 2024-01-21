import {combineReducers} from 'redux'
import amountReducer from './amountReducer'

//  combining multiple reducers into a single reducer

const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;