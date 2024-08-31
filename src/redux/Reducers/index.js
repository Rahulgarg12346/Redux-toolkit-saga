import {combineReducers} from '@reduxjs/toolkit'

import authReducer from './Authslice'
const rootReducer = combineReducers({
    auth: authReducer,
})
export default rootReducer