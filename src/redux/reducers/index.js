import {combineReducers} from 'redux'
import course /** courseReducer with default you can import as any name */  from './courseReducer'

const rootRecucer = combineReducers({
    course: course
})

export default rootRecucer;