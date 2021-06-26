import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import sagas from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(sagas);

export default store;