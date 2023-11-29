

    export const todoReducer = ( initialState = [], action = {} ) => {

        switch (action.type) {
            case '[TODO] Add Todo':
                return [ ...initialState, action.payload ];
                //throw new Error ("Action.type = 'ABC' no está implementado!");
            default:
                return initialState;
        }
        
    }