import { createStore, applyMiddleware } from 'redux'
import rootRecucer from './reducers' // index.js implied
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default configureStore(initialState) {
    return createStore(rootRecucer, initialState, applyMiddleware());
}