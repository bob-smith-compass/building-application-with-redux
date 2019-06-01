export default /** courseReducer with default you can import as any name */ function courseReducer(state = [] /** initialize state to empty array */, action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, {...action.course}]
            // break;
    
        default:
            return state;
            // break;
    }
}