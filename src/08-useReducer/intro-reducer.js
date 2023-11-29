

const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const todoReducer = ( state = initialState, action = {})  => {

    if( action.type === '[TODO] add Todo' ) return [ ...state, action.payload ];
    
    return state;

}

let todos = todoReducer();

const newTodo = { 
    id:2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

const AddTodoAction = {
    type:'[TODO] add Todo',
    payload: newTodo
}

todos = todoReducer(initialState, AddTodoAction)

console.log({state: todos});
