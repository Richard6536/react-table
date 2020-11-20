
export const userReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ action.payload, ...state];

        case 'delete':
            return state.filter( todo => todo.userId !== action.payload);

        case 'toggle':
            return state.map( todo => ( todo.userId === action.payload ) ? { ...todo, done: !todo.done } : todo );

        default:
            return state;
    }
}