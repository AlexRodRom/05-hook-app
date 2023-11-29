import { TodoList } from "./todoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, pendings } = useTodos();

    return (

        <>
            <div className="d-flex d-flex justify-content-between"><h1>TodoApp ({ todos.length }) </h1><small>Pendientes: ( { pendings } )</small></div>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo= { handleToggleTodo }>
                    </TodoList>
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
