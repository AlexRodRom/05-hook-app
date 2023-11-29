import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./todoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const TodoApp = () => {

    
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    
    useEffect(() => {
      console.log(todos);
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action =  {
            type: "[TODO] Add Todo",
            payload: todo
        } 
        dispatch(action);
    }

    const handleDeleteTodo = ( todo ) => {
        const action =  {
            type: "[TODO] Delete Todo",
            payload: todo
        } 
        dispatch(action);
    } 

    return (

        <>
            <h1>TodoApp ({ todos.length }) <small>Pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onDeleteTodo = { handleDeleteTodo }></TodoList>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo = { handleNewTodo }></TodoAdd>
                </div>
            </div>
        </>
    )
}
