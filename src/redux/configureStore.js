import { createStore, applyMiddleware, compose } from 'redux'
import rootRecucer from './reducers'; // index.js implied
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
    const composeEnhancer = window.__REDUX_DEVTOOL_ESTENSION_COMPOSE__ || compose;
    return createStore(rootRecucer, initialState, applyMiddleware(reduxImmutableStateInvariant()));
}
