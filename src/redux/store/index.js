import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from 'redux-saga'
import rootReducer from "../Reducers";
import rootSaga from "../../networks/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export default store