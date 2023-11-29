import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./todoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del Alma',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del Poder',
            done: false
        }
    ];

    const handleNewTodo = ( todo ) => {
        console.log( todo );
    }

    const [todos, dispatch ] = useReducer( todoReducer(), initialState )

    return (

        <>
            <h1>TodoApp ({ todos.length }) <small>Pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos }></TodoList>
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
