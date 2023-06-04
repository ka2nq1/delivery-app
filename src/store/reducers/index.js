import { combineReducers } from 'redux'
import alertsReducer from './alertsReducer'
import cartReducer from './cartReducer'
import shopsReducer from './shopsReducer'

export default combineReducers({
    cart: cartReducer,
    shops: shopsReducer,
    alert: alertsReducer
})