import { createStore, applyMiddleware } from 'redux'
import rootRecucer from './reducers' // index.js implied

export default configureStore(initialState) {
    return createStore(rootRecucer, initialState);
}